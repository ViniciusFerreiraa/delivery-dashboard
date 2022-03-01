import { wordpressApi } from 'services/api'

export async function getAllPosts() {
  try {
    const response = await wordpressApi.get('/wp/v2/posts?_embed')

    return response.data
  } catch (error) {
    throw new Error(error)
  }
}

export async function getPost(slug) {
  try {
    const posts = await getAllPosts()
    const postArray = posts.filter((post) => post.slug == slug)
    const post = postArray.length > 0 ? postArray[0] : null
    return post
  } catch (error) {
    throw new Error(error)
  }
}

export async function getSlugs(type) {
  let elements = []

  switch (type) {
    case 'posts':
      elements = await getAllPosts()
      break
  }

  const elementsIds = elements.map((element) => {
    return {
      params: {
        slug: element.slug
      }
    }
  })

  return elementsIds
}

export async function getPageData(slug) {
  const response = await wordpressApi.get(
    `/wp/v2/pages?acf_format=standard&slug=${slug}`
  )

  return response.data
}

export async function getGroupData(id) {
  const response = await wordpressApi.get(`/myplugin/v1/group/${id}`)

  return response.data
}
