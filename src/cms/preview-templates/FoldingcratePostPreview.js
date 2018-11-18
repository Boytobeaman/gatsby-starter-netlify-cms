import React from 'react'
import PropTypes from 'prop-types'
import { FoldingcratePostTemplate } from '../../templates/foldingcrate-post'

const FoldingcratePostPreview = ({ entry, widgetFor }) => (
  <FoldingcratePostTemplate
    content={widgetFor('body')}
    description={entry.getIn(['data', 'description'])}
    tags={entry.getIn(['data', 'tags'])}
    title={entry.getIn(['data', 'title'])}
  />
)

FoldingcratePostPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default FoldingcratePostPreview
