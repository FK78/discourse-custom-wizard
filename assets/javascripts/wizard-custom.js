//= require discourse/app/lib/autocomplete
//= require discourse/app/lib/utilities
//= require discourse/app/lib/offset-calculator
//= require discourse/app/lib/lock-on
//= require discourse/app/lib/text-direction
//= require discourse/app/lib/to-markdown
//= require discourse/app/lib/load-script
//= require discourse/app/lib/url
//= require discourse/app/lib/ajax
//= require discourse/app/lib/ajax-error
//= require discourse/app/lib/page-visible
//= require discourse/app/lib/logout
//= require discourse/app/lib/render-tag
//= require discourse/app/lib/notification-levels
//= require discourse/app/lib/computed
//= require discourse/app/lib/user-search
//= require discourse/app/lib/text
//= require discourse/app/lib/formatter
//= require discourse/app/lib/quote
//= require discourse/app/lib/link-mentions
//= require discourse/app/lib/link-hashtags
//= require discourse/app/lib/category-hashtags
//= require discourse/app/lib/tag-hashtags
//= require discourse/app/lib/uploads
//= require discourse/app/lib/category-tag-search
//= require discourse/app/lib/intercept-click
//= require discourse/app/lib/show-modal
//= require discourse/app/lib/key-value-store
//= require discourse/app/lib/settings
//= require discourse/app/lib/user-presence
//= require discourse/app/lib/hash
//= require discourse/app/lib/bookmark
//= require discourse/app/lib/put-cursor-at-end
//= require discourse/app/lib/safari-hacks
//= require discourse/app/lib/preload-store
//= require discourse/app/lib/topic-fancy-title
//= require discourse/app/lib/cookie
//= require discourse/app/lib/public-js-versions
//= require discourse/app/lib/load-oneboxes
//= require discourse/app/lib/highlight-syntax

//= require discourse/app/mixins/singleton
//= require discourse/app/mixins/upload

//= require discourse/app/adapters/rest

//= require message-bus

//= require discourse/app/models/login-method
//= require discourse/app/models/permission-type
//= require discourse/app/models/archetype
//= require discourse/app/models/rest
//= require discourse/app/models/site
//= require discourse/app/models/category
//= require discourse/app/models/session
//= require discourse/app/models/post-action-type
//= require discourse/app/models/trust-level
//= require discourse/app/models/store
//= require discourse/app/models/result-set
//= require discourse/app/models/bookmark
//= require discourse/app/models/user
//= require discourse/app/models/user-stream
//= require discourse/app/models/user-action
//= require discourse/app/models/user-action-group
//= require discourse/app/models/user-posts-stream
//= require discourse/app/models/badge
//= require discourse/app/models/badge-grouping
//= require discourse/app/models/user-badge
//= require discourse/app/models/topic
//= require discourse/app/models/action-summary
//= require discourse/app/models/user-action-stat
//= require discourse/app/models/user-drafts-stream
//= require discourse/app/models/user-draft
//= require discourse/app/models/composer
//= require discourse/app/models/draft
//= require discourse/app/models/group
//= require discourse/app/models/group-history

//= require discourse/app/helpers/category-link
//= require discourse/app/helpers/user-avatar
//= require discourse/app/helpers/format-username
//= require discourse/app/helpers/share-url
//= require discourse/app/helpers/decorate-username-selector
//= require discourse-common/addon/helpers/component-for-collection
//= require discourse-common/addon/helpers/component-for-row
//= require discourse-common/addon/lib/raw-templates
//= require discourse/app/helpers/discourse-tag

//= require discourse/app/services/app-events
//= require discourse/app/services/emoji-store

//= require discourse/app/components/user-selector
//= require discourse/app/components/conditional-loading-spinner
//= require discourse/app/components/d-button
//= require discourse/app/components/composer-editor
//= require discourse/app/components/d-editor
//= require discourse/app/components/input-tip
//= require discourse/app/components/emoji-picker
//= require discourse/app/components/input-tip
//= require discourse/app/components/date-picker
//= require discourse/app/components/time-input
//= require discourse/app/components/date-input
//= require discourse/app/components/date-time-input
//= require discourse/app/components/text-field
//= require discourse/app/components/d-textarea

//= require discourse/app/templates/components/conditional-loading-spinner
//= require discourse/app/templates/components/d-button
//= require discourse/app/templates/components/d-editor
//= require discourse/app/templates/components/date-picker
//= require discourse/app/templates/components/date-input
//= require discourse/app/templates/components/time-input
//= require discourse/app/templates/components/date-time-input
//= require discourse/app/templates/components/emoji-picker
//= require discourse/app/templates/components/popup-input-tip
//= require discourse/app/templates/category-tag-autocomplete
//= require discourse/app/templates/emoji-selector-autocomplete
//= require discourse/app/templates/user-selector-autocomplete

//= require discourse/app/initializers/jquery-plugins
//= require discourse/app/pre-initializers/sniff-capabilities

//= require ember-addons/decorator-alias
//= require ember-addons/macro-alias
//= require ember-addons/fmt
//= require polyfills

//= require markdown-it-bundle
//= require lodash.js
//= require mousetrap.js
//= require template_include.js
//= require caret_position.js
//= require popper.js
//= require bootstrap-modal.js
//= require bootbox.js
//= require discourse-shims

//= require ./wizard/custom-wizard
//= require_tree ./wizard/components
//= require_tree ./wizard/controllers
//= require_tree ./wizard/helpers
//= require_tree ./wizard/initializers
//= require_tree ./wizard/lib
//= require_tree ./wizard/models
//= require_tree ./wizard/routes
//= require_tree ./wizard/templates

//= require discourse/app/components/mount-widget
//= require discourse/app/widgets/widget
//= require discourse/app/widgets/hooks
//= require discourse/app/widgets/decorator-helper
//= require discourse/app/widgets/connector
//= require discourse/app/widgets/post-cooked
//= require discourse/app/lib/highlight-html
//= require discourse/app/lib/highlight-search
//= require discourse/app/lib/constants
//= require discourse/app/lib/click-track
//= require discourse/app/helpers/loading-spinner
//= require discourse/app/widgets/raw-html
//= require discourse/app/lib/dirty-keys

//= require discourse/app/widgets/search-menu
//= require discourse/app/widgets/search-menu-results
//= require discourse/app/widgets/post
//= require discourse/app/helpers/node
//= require discourse/app/widgets/post-stream

//= require discourse/app/lib/posts-with-placeholders
//= require discourse/app/lib/transform-post
//= require discourse/app/helpers/category-link
//= require discourse/app/lib/render-tags
//= require discourse/app/helpers/topic-status-icons