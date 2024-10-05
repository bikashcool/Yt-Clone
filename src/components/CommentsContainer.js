import React from 'react'

const commentsData = [
  {
    name: "BikaSh Kumar",
    text: "jod jod jod",
    replies: [
      {
        name: "BikaSh Kumar",
        text: "jod jod jod",
        replies: [
          {
            name: "BikaSh Kumar",
            text: "jod jod jod",
            replies: [
              {
                name: "BikaSh Kumar",
                text: "jod jod jod",
                replies: [],
              },
            ],
          },
        ],
      },
      {
        name: "BikaSh Kumar",
        text: "jod jod jod",
        replies: [],
      },
      {
        name: "BikaSh Kumar",
        text: "jod jod jod",
        replies: [
          {
            name: "BikaSh Kumar",
            text: "jod jod jod",
            replies: [],
          },
        ],
      },
    ],
  },
  {
    name: "BikaSh Kumar",
    text: "jod jod jod",
    replies: [
      {
        name: "BikaSh Kumar",
        text: "jod jod jod",
        replies: [],
      },
    ],
  },
  {
    name: "BikaSh Kumar",
    text: "jod jod jod",
    replies: [
      {
        name: "BikaSh Kumar",
        text: "jod jod jod",
        replies: [],
      },
      {
        name: "BikaSh Kumar",
        text: "jod jod jod",
        replies: [],
      },
      {
        name: "BikaSh Kumar",
        text: "jod jod jod",
        replies: [],
      },
      {
        name: "BikaSh Kumar",
        text: "jod jod jod",
        replies: [],
      },
    ],
  },
  {
    name: "BikaSh Kumar",
    text: "FIRST!!",
    replies: [
      {
        name: "BikaSh Kumar",
        text: "jod jod jod",
        replies: [
          {
            name: "BikaSh Kumar",
            text: "jod jod jod",
            replies: [
              {
                name: "BikaSh Kumar",
                text: "jod jod jod",
                replies: [],
              },
            ],
          },
        ],
      },
      {
        name: "BikaSh Kumar",
        text: "jod jod jod",
        replies: [],
      },
      {
        name: "BikaSh Kumar",
        text: "jod jod jod",
        replies: [
          {
            name: "BikaSh Kumar",
            text: "jod jod jod",
            replies: [
              {
                name: "BikaSh Kumar",
                text: "jod jod jod",
                replies: [],
              },
            ],
          },
        ],
      },
      {
        name: "BikaSh Kumar",
        text: "jod jod jod",
        replies: [],
      },
      {
        name: "BikaSh Kumar",
        text: "jod jod jod",
        replies: [],
      },
      {
        name: "BikaSh Kumar",
        text: "jod jod jod",
        replies: [],
      },
    ],
  },
  {
    name: "BikaSh Kumar",
    text: "jod jod jod",
    replies: [
      {
        name: "BikaSh Kumar",
        text: "first!",
        replies: [],
      },
      {
        name: "BikaSh Kumar",
        text: "jod jod jod",
        replies: [],
      },
      {
        name: "BikaSh Kumar",
        text: "jod jod jod",
        replies: [],
      },
      {
        name: "BikaSh Kumar",
        text: "jod jod jod",
        replies: [],
      },
      {
        name: "BikaSh Kumar",
        text: "jod jod jod",
        replies: [],
      },
    ],
  },
];

const Comment = ({data}) => {
  const {name, text, replies} = data;

  return (
    <div className="flex bg-gray-50 rounded-md shadow-md p-3 my-2">
      <img
        className="w-7 h-7"
        alt="user-img"
        src="data:image/png;base64,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"
      />
      <div className="px-3">
        <p className="font-bold">{name}: </p>
        <p>{text}</p>
      </div>
    </div>
  );
};

const CommentsList = ( {comments} ) => {
  return comments.map((comment, index) => (
    <div key={index}>
      <Comment data={comment} />
      <div className="pl-5 border border-l-black ml-5">
        <CommentsList comments={comment.replies} />
      </div>
    </div>
  ));
}

const CommentsContainer = () => {
  return ( 
    <div className='m-5 p-2'>
      <h1 className='text-2xl font-bold p-3'>Comments</h1>
      <CommentsList comments={commentsData}/>
    </div>
  )
}

export default CommentsContainer;
