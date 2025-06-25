import { Box, InputBase, Typography, IconButton } from '@mui/material';
import MarkEmailReadOutlinedIcon from "@mui/icons-material/MarkEmailReadOutlined";
import { useState } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import '../home/home.css';

const Subscribe = () => {
    const [email, setEmail] = useState("");
    const [recaptchaToken, setRecaptchaToken] = useState(null);
    const [loading, setLoading] = useState(false);
    const [submittedEmails, setSubmittedEmails] = useState(new Set());

    const handleCaptchaChange = (token) => {
        setRecaptchaToken(token);
    };

    const handleSubscribe = async () => {
        if (!email) {
            alert("Please enter your email.");
            return;
        }

        if (submittedEmails.has(email)) {
            alert("You've already submitted this email.");
            return;
        }

        if (!recaptchaToken) {
            alert("Please complete the CAPTCHA.");
            return;
        }


        setLoading(true);

        try {

            const API_URL = process.env.REACT_APP_API_URL;

            const response = await fetch(`${API_URL}/api/mailing-list-submissions`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    data: {
                        email,
                        recaptchaToken
                    }
                })
            });

            const result = await response.json();

            if (!response.ok) {
                const errorMessage = result?.error?.message || result?.message || "Unknown error";

                if (errorMessage.toLowerCase().includes("unique")) {
                    alert("You're already subscribed with this email.");
                }

                if (errorMessage.toLowerCase().includes("already subscribed")) {
                    alert("You're already subscribed with this email.");

                } else if (errorMessage.toLowerCase().includes("recaptcha")) {
                    alert("CAPTCHA verification failed. Please try again.");
                } else {
                    alert(`Subscription failed: ${errorMessage}`);
                }

                throw new Error(errorMessage);
            }

            alert("Subscribed successfully!");
            setSubmittedEmails(new Set([...submittedEmails, email]));
            setEmail("");
            setRecaptchaToken(null);
        } catch (error) {
            console.error("Subscription failed:", error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <Box width="90%" height="100vh" margin="auto" textAlign="center" backgroundColor="black" color="antiquewhite">
            <IconButton>
                <MarkEmailReadOutlinedIcon fontSize="large" style={{ color: "antiquewhite" }} />
            </IconButton>
            <Typography variant="h3">Subscribe to my Newsletter</Typography>
            <Box
                p="4px"
                m="auto"
                display="flex"
                flexDirection="column"
                alignItems="center"
                justifyContent="center"
                width="100%"
                flexWrap="wrap"
                backgroundColor="black"
                color="antiquewhite"
            >
                <InputBase
                    sx={{
                        m: 1,
                        flex: 1,
                        backgroundColor: "antiquewhite",
                        fontFamily: "courier",
                        padding: "12px",
                        borderRadius: "4px"
                    }}
                    placeholder="Enter email"
                    id="subscribeToMailingList"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                />

                <Box m="15px" p="4px" display="flex" justifyContent="center" align-items="center" object-fit="contain" >
                    <ReCAPTCHA
                        className="reCaptcha"
                        sitekey="6LeVK2grAAAAADLvjZlJpuEKJJG627TzKk5dpgOc"
                        onChange={handleCaptchaChange}
                        size="compact"
                    />
                </Box>
                <button className="button linkBtn" style={{ color: "peru" }}>
                    <Typography
                        sx={{
                            p: "10px",
                            ":hover": { cursor: "pointer", color: "peru" }
                        }}
                        onClick={handleSubscribe}
                    >
                        {loading ? "Submitting..." : "Subscribe"}
                    </Typography>
                </button>
            </Box>
        </Box>
    );
};

export default Subscribe;
