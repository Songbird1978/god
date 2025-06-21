import type { Schema, Struct } from '@strapi/strapi';

export interface ContentBiography extends Struct.ComponentSchema {
  collectionName: 'components_content_biographies';
  info: {
    description: '';
    displayName: 'biography';
    icon: 'layer';
  };
  attributes: {
    text: Schema.Attribute.Text;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'content.biography': ContentBiography;
    }
  }
}
