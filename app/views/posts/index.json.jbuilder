json.array!(@posts) do |post|
  json.extract! post, :id, :title, :slug, :description, :category_id, :content, :is_published
  json.url post_url(post, format: :json)
end
