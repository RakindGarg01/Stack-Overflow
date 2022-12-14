import React from 'react'

const WidgetTags = () => {

    const tags = ['C++', 'Java', 'Python', 'Html', 'CSS', 'React Js', 'Javascript','Mern','NodeJs','NextJs','Php','Mongodb','Mysql','ReactJs']

  return (
    <div className='widget-tags'>
            <h4>Watched tags</h4>
            <div className='widget-tags-div'>
                {
                    tags.map((tag) => (
                        <p key={tag}>{tag}</p>
                    ))
                }
            </div>
        </div>
  )
}

export default WidgetTags