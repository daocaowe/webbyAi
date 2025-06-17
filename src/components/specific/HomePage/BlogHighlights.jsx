import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const BlogWrapper = styled.section`
  width: 100%;
  max-width: 1200px;
  padding: 2rem;
  margin: 1rem 0;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.05);
  text-align: center;
`;

const Title = styled.h2`
  font-size: 1.8rem;
  margin-bottom: 1.5rem;
  color: #333;
`;

const PostGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
  text-align: left;
`;

const PostCard = styled.div`
  background-color: #f8f9fa;
  border-radius: 8px;
  padding: 1.5rem;
  box-shadow: 0 1px 3px rgba(0,0,0,0.03);
  transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 4px 8px rgba(0,0,0,0.05);
  }
`;

const PostImagePlaceholder = styled.div`
  height: 150px;
  background-color: #e0e0e0;
  border-radius: 6px;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #777;
  font-size: 0.9rem;
`;

const PostTitle = styled.h3`
  font-size: 1.2rem;
  color: #333;
  margin-bottom: 0.5rem;
`;

const PostExcerpt = styled.p`
  font-size: 0.95rem;
  color: #555;
  line-height: 1.6;
  margin-bottom: 1rem;
`;

const ReadMoreLink = styled(Link)`
  color: #007bff;
  text-decoration: none;
  font-weight: 600;

  &:hover {
    text-decoration: underline;
  }
`;

const BlogHighlights = () => {
  // Mock data for blog posts
  const posts = [
    {
      id: 1,
      title: 'Why Naval Ravikant Thinks Remote Work Is The Future',
      excerpt: 'It feels like the rise of remote works has been a top conversation in tech for years, but despite the enthusiasm...',
      imagePlaceholder: 'Blog Post Image 1',
      link: '/blog/remote-work-future'
    },
    {
      id: 2,
      title: 'The Truth About Finding Your First Engineering Job',
      excerpt: 'Even for senior engineers, job searches can be confusing, frustrating affairs. When you\'re a junior engineer...',
      imagePlaceholder: 'Blog Post Image 2',
      link: '/blog/first-engineering-job'
    },
    {
      id: 3,
      title: '30 Questions to Ask Before Joining a Startup',
      excerpt: 'You\'re trying to evaluate the company while still impressing your interviewers, and that balance can be tricky...',
      imagePlaceholder: 'Blog Post Image 3',
      link: '/blog/questions-for-startup'
    }
  ];

  return (
    <BlogWrapper>
      <Title>From the Blog</Title>
      <PostGrid>
        {posts.map(post => (
          <PostCard key={post.id}>
            <PostImagePlaceholder>{post.imagePlaceholder}</PostImagePlaceholder>
            <PostTitle>{post.title}</PostTitle>
            <PostExcerpt>{post.excerpt}</PostExcerpt>
            <ReadMoreLink to={post.link}>Read More →</ReadMoreLink>
          </PostCard>
        ))}
      </PostGrid>
    </BlogWrapper>
  );
};

export default BlogHighlights;
