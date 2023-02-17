import { useGlobalContext } from './context'

const Stories = () => {
  const { isLoading, hits } = useGlobalContext()
  if (isLoading) {
    return <div className='loading'></div>
  }
  return (
    <section className='stories'>
      {hits.map((story) => {
        const { objectID, title, num_comments, url, author, created_at } = story

        return (
          <article className='story' key={objectID}>
            <h4 className='title'>
              <a
                href={url}
                className='read-link'
                target='_blank'
                rel='noopener noreferrer'
              >
                {title}
              </a>
            </h4>
            <p className='info'>
              <span>
                By: {author} | {new Date(created_at).toDateString().slice(4)} |{' '}
                {num_comments} comments
              </span>
            </p>
          </article>
        )
      })}
    </section>
  )
}

export default Stories
