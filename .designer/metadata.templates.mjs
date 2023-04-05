export default [{
    key: 'nuxt-elements',
    children: [{
        key: 'div-text',
        src: { template: {
            tag: 'div',
            children: ['nuxt text in div']
        } }
    }, {
        key: 'span-text',
        src: { template: {
            tag: 'span',
            children: ['nuxt text in span']
        } }
    }]
}]