import React from 'react'

const SearchAndSort = () =>  {
  const joyce = "https://github.com/joycechau"
  const jeff = "https://github.com/jeffreyfan93"
  return (
    <div>
      <h2>
        Search and Sort
      </h2>
      <p className="project-description-text">
        A project written in pure Javascript (ES6), I worked with two great
        programmers
        <span>
          <a target="_blank" href={joyce} className="project-description-link">
            {" "}Joyce Chau{" "}
          </a>
        </span>
        and
        <span>
          <a target="_blank" href={jeff} className="project-description-link">
            {" "}Jeffrey Fan{" "}
          </a>
        </span>
        to create a web app that
        visually explain binary search, quick sort, and merge sort.
      </p>
    </div>
  )
}

export default SearchAndSort
