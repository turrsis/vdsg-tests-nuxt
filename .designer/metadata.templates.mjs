export default {
    groups: {
        'nuxt-elements': 'nuxt-elements',
    },
    elements: {
        'nuxt-elements': {
            label: 'nuxt elements',
            templates: {
                'div': {
                    label: 'div-text',
                    template: {
                        tag: 'div',
                        children: ['nuxt text in div']
                    }
                },
                'span': {
                    label: 'span-text',
                    template: {
                        tag: 'span',
                        children: ['nuxt text in span']
                    }
                }
            }
        },
    }
}