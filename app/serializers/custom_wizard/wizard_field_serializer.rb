# frozen_string_literal: true

class CustomWizard::FieldSerializer < ::ApplicationSerializer
  attributes :id,
             :index,
             :type,
             :required,
             :value,
             :label,
             :placeholder,
             :description,
             :image,
             :file_types,
             :format,
             :limit,
             :property,
             :content,
             :tag_groups,
             :can_create_tag,
             :category,
             :validations,
             :max_length,
             :char_counter,
             :preview_template

  def id
    object.id
  end

  def index
    object.index
  end

  def type
    object.type
  end

  def required
    object.required
  end

  def value
    object.value
  end

  def label
    I18n.t("#{i18n_key}.label", default: object.label, base_url: Discourse.base_url)
  end

  def include_label?
    label.present?
  end

  def description
    I18n.t("#{i18n_key}.description", default: object.description, base_url: Discourse.base_url)
  end

  def include_description?
    description.present?
  end

  def placeholder
    I18n.t("#{i18n_key}.placeholder", default: object.placeholder)
  end

  def include_placeholder?
    placeholder.present?
  end

  def image
    object.image
  end

  def include_image?
    object.image.present?
  end

  def file_types
    object.file_types
  end

  def format
    object.format
  end

  def limit
    object.limit
  end

  def property
    object.property
  end

  def content
    object.content
  end

  def tag_groups
    object.tag_groups
  end

  def can_create_tag
    object.can_create_tag
  end

  def validations
    validations = {}
    object.validations&.each do |type, props|
      next unless props["status"]
      validations[props["position"]] ||= {}
      validations[props["position"]][type] = props.merge CustomWizard::RealtimeValidation.types[
                    type.to_sym
                  ]
    end

    validations
  end

  def max_length
    object.max_length
  end

  def char_counter
    object.char_counter
  end

  def preview_template
    object.preview_template
  end

  protected

  def i18n_key
    @i18n_key ||= "#{object.step.wizard.id}.#{object.step.id}.#{object.id}".underscore
  end
end
