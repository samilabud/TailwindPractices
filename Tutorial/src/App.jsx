import './App.css'

const App = () => {
  return (
    <div className="flex flex-col sm:h-42 md:h-48 lg:h-56 xl:h-64 justify-around">

      <div className="card">
          Test card
      </div>
      <button type="button" className="w-24 p-3 rounded-md bg-gradient-to-r from-green-400 to-blue-500 hover:from-purple-400">
        Hover me
      </button>
      <p className="line-clamp-2 bg-amber-300 w-32 text-sm text-gray-600">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus possimus alias saepe, dicta, quas modi temporibus impedit ab est reiciendis architecto facere fuga quos tempora magnam porro eveniet facilis nemo!
      </p>
      <div className="flex flex-col w-48 bg-blue-300">
        <h6 className="text-slate-700 underline">List with images bullet</h6>
        <ul className="list-image-[url(little_carrot.png)] w-32 text-sm ml-10">
          <li>5 cups chopped Porcini mushrooms</li>
          <li>1/2 cub of olive oil</li>
        </ul>
      </div>
      {/* <section className="h-screen bg-twitter-blue flex items-center justify-center m-12 text-center text-3xl p-12 md:p-14 lg:p-16 xl:p-20">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem fugit sequi odit natus inventore unde cumque ut laudantium nemo obcaecati deserunt velit dolorem quas, illum quos totam quia aspernatur! Similique?</p>
      </section> */}

    </div>
  )
}

export default App;