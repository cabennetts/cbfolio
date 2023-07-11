import {ComposeIcon} from '@sanity/icons'

const blog = {
    name: 'blog',
    title: 'Blog',
    type: 'document',
    icon: ComposeIcon,
    fields: [
        {
            name: 'title',
            title: 'title',
            type: 'string',
            validation: (rule: any) => rule.required(),
        },
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: { source: 'title' },
            validation: (rule: any) => rule.required(),
        },
        {
            name: 'description',
            description: 'Used both for the <meta> description tag for SEO, and the personal website subheader.',
            title: 'Description',
            type: 'string',
            validation: (rule: any) => rule.required(),
        },
        {
            name: 'image',
            title: 'Image',
            type: 'image',
            options: { hotspot: true },
            fields: [
                {
                    name: 'alt',
                    title: 'Alt',
                    type: 'string',
                },
            ]
        },
        {
            name: 'content',
            title: 'Content',
            type: 'array',
            of: [{ type: "block" }]
        },
        {
            name: 'tags',
            title: 'Tags',
            type: 'array',
            of: [{ type: 'string' }],
            options: {
                layout: 'tags',
            },
        },
    ]
}

export default blog;