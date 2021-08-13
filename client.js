import sanity from '@sanity/client'

export default sanity({
    projectId: 'iieldzr0',
    dataset: 'production',
    apiVersion: '2021-03-25',
    useCdn: false,
})