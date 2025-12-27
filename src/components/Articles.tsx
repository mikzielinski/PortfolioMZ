import { FaLinkedin, FaCalendarAlt } from 'react-icons/fa'
import './Articles.css'

interface Article {
  id: string
  title: string
  date: string
  excerpt: string
  url: string
  imageUrl?: string
}

interface ArticlesProps {
  articles: Article[]
}

const Articles = ({ articles }: ArticlesProps) => {
  return (
    <section id="articles" className="articles">
      <div className="container">
        <h2 className="section-title">Featured Articles</h2>
        <p className="section-subtitle">
          Insights and thoughts on AI, RPA, and business transformation
        </p>
        <div className="articles-grid">
          {articles.map((article) => (
            <article key={article.id} className="article-card">
              <div className="article-content">
                <div className="article-date">
                  <FaCalendarAlt /> {article.date}
                </div>
                <h3>{article.title}</h3>
                <p className="article-excerpt">{article.excerpt}</p>
                <a 
                  href={article.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="article-link"
                >
                  Read on LinkedIn <FaLinkedin />
                </a>
              </div>
            </article>
          ))}
        </div>
        <div className="articles-cta">
          <a 
            href="https://www.linkedin.com/in/mikzielinski/recent-activity/articles/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn btn-primary"
          >
            View All Articles on LinkedIn
          </a>
        </div>
      </div>
    </section>
  )
}

export default Articles
