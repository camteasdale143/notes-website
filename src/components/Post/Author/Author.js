// @flow strict
import React from 'react';
import { getContactHref } from '../../../utils';
import styles from './Author.module.scss';
import { useSiteMetadata } from '../../../hooks';

const Author = () => {
  const { author1 } = useSiteMetadata();

  return (
    <div className={styles['author']}>
      <p className={styles['author__bio']}>
        {author1.bio}
        <a
          className={styles['author__bio-twitter']}
          href={getContactHref('twitter', author1.contacts.twitter)}
          rel="noopener noreferrer"
          target="_blank"
        >
          <strong>{author1.name}</strong> on Twitter
        </a>
      </p>
    </div>
  );
};

export default Author;
