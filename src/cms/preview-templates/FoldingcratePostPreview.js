import React from 'react'
import PropTypes from 'prop-types'
import { FoldingcratePostTemplate } from '../../templates/foldingcrate-post'

const FoldingcratePostPreview = ({ entry, widgetFor }) => (
  <FoldingcratePostTemplate
    content={widgetFor('body')}
    description={entry.getIn(['data', 'description'])}
    tags={entry.getIn(['data', 'tags'])}
    title={entry.getIn(['data', 'title'])}
    category={entry.getIn(['data', 'category'])}
    source={entry.getIn(['data', 'source'])}
    model={entry.getIn(['data', 'model'])}
    external_long={entry.getIn(['data', 'external_long'])}
    external_width={entry.getIn(['data', 'external_width'])}
    external_height={entry.getIn(['data', 'external_height'])}
    internal_long={entry.getIn(['data', 'internal_long'])}
    internal_width={entry.getIn(['data', 'internal_width'])}
    internal_height={entry.getIn(['data', 'internal_height'])}
    folded_height={entry.getIn(['data', 'folded_height'])}
    volumn={entry.getIn(['data', 'volumn'])}
    weight={entry.getIn(['data', 'weight'])}
  />
)

FoldingcratePostPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default FoldingcratePostPreview
