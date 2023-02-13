import metadataTests from 'vdsg-metadata-tests'
import metadataConfigs from 'vdsg-metadata-configs'
import templates from './metadata.templates.mjs'

export default [
    metadataConfigs,
    metadataTests,
    {
        templates: templates
    }
]