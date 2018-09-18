import React from 'react';

const freeshipping = (props) => {
  return (
    <span className={'icon' + (props.classes ? ' ' + props.classes : '')}>
      <svg width="100" height="100" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M53.824 2.148c1.72 2.291 4.78 2.673 7.075 1.146 2.676-1.91 6.692-.764 7.648 2.482.956 2.673 3.633 4.01 6.31 3.245 3.25-.954 6.5 1.337 6.5 4.774 0 2.673 2.295 4.964 4.972 4.964 3.442 0 5.736 3.246 4.78 6.492-.765 2.673.574 5.346 3.25 6.3 3.25 1.146 4.398 4.965 2.486 7.637-1.53 2.292-1.147 5.347 1.147 6.874 2.677 1.91 2.677 6.11 0 8.02-2.294 1.718-2.677 4.772-1.147 6.873 1.912 2.673.765 6.682-2.486 7.637-2.676.954-4.015 3.628-3.25 6.3.956 3.246-1.338 6.492-4.78 6.492-2.677 0-4.971 2.291-4.971 4.964 0 3.437-3.25 5.728-6.501 4.774-2.677-.764-5.354.573-6.31 3.246-1.147 3.245-4.971 4.39-7.648 2.482-2.295-1.528-5.354-1.146-6.884 1.145-1.912 2.673-6.118 2.673-8.03 0-1.721-2.29-4.78-2.673-6.884-1.145-2.676 1.909-6.692.763-7.648-2.482-.956-2.673-3.633-4.01-6.31-3.246-3.25.954-6.5-1.337-6.5-4.774 0-2.673-2.295-4.964-4.972-4.964-3.442 0-5.736-3.246-4.78-6.491.765-2.673-.574-5.347-3.25-6.301-3.25-1.146-4.398-4.964-2.486-7.637 1.53-2.291 1.147-5.346-1.147-6.874-2.677-1.91-2.677-6.11 0-8.019 2.294-1.718 2.677-4.773 1.147-6.873-1.912-2.673-.765-6.683 2.486-7.638 2.676-.954 4.015-3.627 3.25-6.3-.956-3.246 1.338-6.492 4.78-6.492 2.677 0 4.971-2.291 4.971-4.964 0-3.437 3.25-5.728 6.501-4.774 2.295.764 4.972-.763 5.928-3.245 1.147-3.246 4.971-4.392 7.648-2.482 2.294 1.527 5.354 1.145 6.883-1.146 2.295-2.864 6.31-2.864 8.222 0z" className="svg-secondary"/><path d="M41.587 46.636c.574.572 1.147.954 2.103.954 1.721 0 3.25-1.527 3.25-3.437 0-1.909-1.529-3.436-3.25-3.436-.956 0-1.72.382-2.103.954v-.763h-1.72v9.355h1.72v-3.627zm1.912-4.583c1.147 0 1.912.764 1.912 1.91 0 1.145-.765 1.909-1.912 1.909-1.147 0-1.912-.764-1.912-1.91 0-1.145.765-1.909 1.912-1.909zm-7.648-8.019c1.338 0 2.294-.573 2.868-1.337l-1.339-.763c-.382.19-.956.573-1.53.573-.955 0-1.72-.382-1.911-1.337h4.971v-.764c0-1.909-1.338-3.436-3.442-3.436-2.103 0-3.441 1.527-3.441 3.436 0 1.91 1.53 3.628 3.824 3.628zm-.191-5.537c.764 0 1.53.382 1.72 1.337H33.94c.191-.764.765-1.337 1.72-1.337zm21.797 11.456c.574 0 1.147-.573 1.147-1.146s-.573-1.145-1.147-1.145c-.574 0-1.147.572-1.147 1.145 0 .573.573 1.146 1.147 1.146zM35.468 57.519c0-1.91-1.338-3.437-3.441-3.437-2.104 0-3.442 1.527-3.442 3.437 0 1.909 1.338 3.436 3.633 3.436 1.338 0 2.294-.572 2.868-1.336l-1.338-.764c-.383.382-.765.764-1.53.764-.956 0-1.72-.382-1.912-1.337h4.971c.191-.19.191-.572.191-.763zm-5.162-.573c.191-.764.765-1.337 1.72-1.337.765 0 1.53.382 1.722 1.337h-3.442zm7.074-19.284c-.573 0-1.147.572-1.147 1.145 0 .573.574 1.146 1.147 1.146.574 0 1.148-.573 1.148-1.146s-.574-1.145-1.148-1.145zm-8.604.382v9.355h1.721v-3.627c0-1.146.574-1.719 1.53-1.719.764 0 1.338.382 1.338 1.337v3.818h1.721v-4.2c0-1.719-1.147-2.673-2.486-2.673-.956 0-1.53.382-1.912.954v-3.436h-1.912v.19zM40.25 55.8v-1.718h-1.53v-1.91l-1.721.573v1.337h-1.147V55.8h1.147v2.864c0 1.718.765 2.482 3.25 2.291v-1.718c-.956 0-1.53 0-1.53-.764V55.61h1.53v.191zM56.5 47.4h1.72v-6.683h-1.72v6.682zM43.499 34.033c1.338 0 2.294-.573 2.868-1.337l-1.338-.763c-.383.19-.765.573-1.53.573-.956 0-1.72-.382-1.912-1.337h4.971v-.764c0-1.909-1.338-3.436-3.441-3.436-2.104 0-3.442 1.527-3.442 3.436 0 1.91 1.53 3.628 3.824 3.628zm-.191-5.537c.765 0 1.53.382 1.72 1.337h-3.441c.191-.764.765-1.337 1.72-1.337zM36.616 47.4h1.72v-6.682h-1.72v6.682zm36.137-5.919c-.382-.572-1.147-.954-2.103-.954-1.912 0-3.25 1.527-3.25 3.436 0 1.91 1.338 3.437 3.25 3.437.956 0 1.72-.382 2.103-.954v.763c0 1.146-.764 1.719-1.72 1.719-.957 0-1.53-.382-1.721-.955l-1.53.764c.574 1.145 1.72 1.718 3.25 1.718 1.721 0 3.442-.955 3.442-3.246v-6.3h-1.72v.572zm-1.912 4.2c-1.147 0-1.912-.763-1.912-1.908 0-1.146.765-1.91 1.912-1.91 1.148 0 1.912.764 1.912 1.91 0 1.145-.764 1.909-1.912 1.909zM57.84 54.083c-.956 0-1.53.382-1.912.954v-.763h-1.72v6.682h1.72v-3.627c0-1.146.574-1.719 1.53-1.719.765 0 1.338.382 1.338 1.337v3.818h1.721v-4.2c-.191-1.528-1.338-2.482-2.677-2.482zm2.104-13.365v6.682h1.72v-3.627c0-1.146.574-1.719 1.53-1.719.765 0 1.338.382 1.338 1.337v3.818h1.721v-4.2c0-1.719-1.147-2.673-2.485-2.673-.956 0-1.53.382-1.912.954v-.763h-1.912v.19zm-8.796 14.701v-1.145h-1.72v6.682h1.72V57.71c0-1.337 1.147-1.719 2.103-1.719v-1.91c-.956 0-1.912.383-2.103 1.337zm34.99-9.928c.383-.573.574-1.337.765-1.91l-1.53-.954c-.19.573-.19 1.146-.382 1.527l-2.103-2.1c-.382-.382-.765-.764-.765-1.336 0-.573.383-.955 1.147-.955.765 0 1.148.382 1.339 1.146l1.53-.955c-.574-1.337-1.721-2.1-3.06-2.1-1.72 0-2.868 1.145-2.868 2.673 0 .572.192 1.145.383 1.527-.956.573-1.53 1.528-1.53 2.673 0 1.719 1.338 2.864 3.25 2.864.956 0 1.913-.382 2.486-.764l.765.955 1.53-.764-.956-1.527zm-3.632.382c-.956 0-1.53-.573-1.53-1.337 0-.382.191-.954.765-1.336l2.103 2.1c-.382.382-.765.573-1.338.573zm-19.12 10.31c0-.382.382-.573.764-.573.574 0 .956.191 1.147.764l1.53-.764c-.574-.954-1.53-1.336-2.486-1.336-1.338 0-2.485.763-2.485 2.1 0 2.291 3.441 1.91 3.441 2.864 0 .382-.382.573-.956.573-.765 0-1.147-.382-1.338-.955l-1.53.764c.574.954 1.53 1.527 2.868 1.527 1.339 0 2.677-.764 2.677-2.1-.191-2.482-3.633-1.91-3.633-2.864zM50 46.635c.574.573 1.147.955 2.103.955 1.721 0 3.25-1.527 3.25-3.437 0-1.909-1.529-3.436-3.25-3.436-.956 0-1.72.382-2.103.954v-.763h-1.72v9.355H50v-3.627zm1.72-4.582c1.148 0 1.913.764 1.913 1.91 0 1.145-.765 1.909-1.912 1.909-1.147 0-1.912-.764-1.912-1.91 0-1.145.956-1.909 1.912-1.909zM45.986 57.9c0 1.146-.574 1.719-1.53 1.719-.765 0-1.338-.382-1.338-1.337v-3.818h-1.53v4.2c0 1.718 1.147 2.673 2.486 2.673.956 0 1.53-.382 1.912-.955v.764h1.72v-6.682h-1.72V57.9zM28.01 54.655c0-1.719-1.338-3.055-3.059-3.055h-3.824v9.355h1.912V57.71h1.338l1.913 3.245h1.912l-2.104-3.627c1.148-.382 1.912-1.528 1.912-2.673zm-3.25 1.336h-1.912v-2.673h1.912c.765 0 1.338.573 1.338 1.337 0 .763-.573 1.336-1.338 1.336zm-1.912-25.776h3.633v-1.718h-3.633v-2.291h3.824v-1.718h-5.545v9.355h1.912v-3.628h-.191zm1.53 15.466c-1.148 0-1.913-.573-2.104-1.337l-1.72.955c.573 1.337 1.72 2.291 3.632 2.291 1.912 0 3.442-1.145 3.442-2.864 0-1.91-1.53-2.482-3.06-2.864-1.338-.382-1.72-.764-1.72-1.336 0-.573.382-.955 1.147-.955.956 0 1.53.573 1.721 1.146l1.53-.955c-.574-1.337-1.721-2.1-3.442-2.1-1.53 0-3.06.954-3.06 2.864 0 1.718 1.34 2.29 2.869 2.864 1.338.382 2.103.763 2.103 1.336.191.573-.191.955-1.338.955zm5.353-15.084c0-1.336 1.148-1.718 2.104-1.718v-1.91c-.765 0-1.721.383-2.104 1.337v-1.145h-1.72v6.682h1.72v-3.246zm39.006-8.21c-2.294.764-4.589-.19-5.736-2.29-1.147-2.101-.574-4.583 1.147-6.11a5.197 5.197 0 0 0-3.25 1.145c-1.721 1.336-2.486 3.819-1.721 5.919 1.147 3.246 4.971 4.582 7.84 3.055.573-.382 1.338-.955 1.72-1.719zM42.161 72.22l-2.104-.954-1.53-2.864c-.19-.191-.382-.382-.573-.382h-4.398v-2.482c0-.382-.19-.573-.573-.573H21.128c-.382 0-.574.19-.574.573v11.265c0 .381.192.572.574.572h4.015c.192.955 1.148 1.719 2.295 1.719s1.912-.764 2.294-1.719h4.972c.19.955 1.147 1.719 2.294 1.719s1.912-.764 2.294-1.719h2.869c.382 0 .573-.19.573-.572v-4.2c-.382-.192-.382-.383-.573-.383zm-14.914 5.728c-.574 0-1.148-.573-1.148-1.145 0-.573.574-1.146 1.148-1.146.573 0 1.147.573 1.147 1.146 0 .572-.383 1.145-1.147 1.145zm5.162-1.718h-2.868c-.191-.955-1.147-1.719-2.294-1.719-1.148 0-1.912.764-2.295 1.719H21.51V66.11h10.708v10.12h.191zm4.398 1.718c-.574 0-1.147-.573-1.147-1.145 0-.573.573-1.146 1.147-1.146.573 0 1.147.573 1.147 1.146 0 .572-.574 1.145-1.147 1.145zm4.398-1.718H38.91c-.191-.955-1.147-1.719-2.294-1.719-1.148 0-1.912.764-2.295 1.719h-.956v-7.065h4.015l1.339 2.673c0 .191.191.191.382.191l1.912.955v3.246h.192z" className="svg-with-bg"/></svg>
    </span>
  );
};

export default freeshipping;