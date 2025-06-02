import CMS from "decap-cms-app"

import AboutPagePreview from './preview-templates/AboutPagePreview'
import BlogPostPreview from './preview-templates/BlogPostPreview'
// import FoldingcratePostPreview from './preview-templates/FoldingcratePostPreview'
import ProductPagePreview from './preview-templates/ProductPagePreview'

CMS.registerPreviewTemplate('about', AboutPagePreview)
CMS.registerPreviewTemplate('products', ProductPagePreview)
CMS.registerPreviewTemplate('blog', BlogPostPreview)
// CMS.registerPreviewTemplate('foldingCrate', FoldingcratePostPreview)
