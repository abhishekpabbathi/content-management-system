import { useEffect, useState } from "react";
import axios from "axios";

import ContentForm from "../../components/ContentForm";



// ======================
// API Configuration
// ======================

const API_URL =
  `${import.meta.env.VITE_API_URL}/content`;



// ======================
// Content Operations Page
// ======================

export default function ContentPage() {


  const [contents, setContents] = useState([]);

  const [loading, setLoading] = useState(true);

  const [error, setError] = useState("");




  // ======================
  // Fetch Content
  // ======================

  const fetchContents = async () => {


    try {


      setLoading(true);


      const response = await axios.get(
        API_URL
      );


      setContents(
        response.data
      );



    } catch (error) {


      setError(
        "Unable to load content"
      );


    } finally {


      setLoading(false);


    }


  };





  useEffect(() => {


    fetchContents();


  }, []);






  // ======================
  // Create Content
  // ======================

  const createContent = async (data) => {


    try {


      await axios.post(

        API_URL,

        data

      );


      fetchContents();



    } catch(error) {


      alert(
        "Content creation failed"
      );


    }


  };






  // ======================
  // Publish Content
  // ======================

  const publishContent = async(id)=>{


    try {


      await axios.put(

        `${API_URL}/${id}/publish`

      );


      fetchContents();



    } catch(error){


      alert(
        "Publish failed"
      );


    }


  };







  // ======================
  // Delete Content
  // ======================

  const deleteContent = async(id)=>{


    try {


      await axios.delete(

        `${API_URL}/${id}`

      );


      fetchContents();



    }catch(error){


      alert(
        "Delete failed"
      );


    }


  };







  const draftContent = contents.filter(

    (item)=>

      item.status === "Draft"

  );



  const publishedContent = contents.filter(

    (item)=>

      item.status === "Published"

  );





  return (

    <div className="space-y-8">



      <div>


        <h1 className="
          text-3xl
          font-bold
          text-slate-900
        ">

          Content Operations

        </h1>



        <p className="
          text-gray-500
          mt-2
        ">

          Create, store, publish and manage all digital content.

        </p>


      </div>






      <div className="
        bg-white
        rounded-2xl
        border
        shadow-sm
        p-6
      ">


        <h2 className="
          text-xl
          font-bold
          mb-5
        ">

          Create New Content

        </h2>



        <ContentForm

          onCreate={createContent}

        />


      </div>







      {
        loading && (

          <p>
            Loading content...
          </p>

        )
      }







      {
        error && (

          <p className="
            text-red-600
          ">

            {error}

          </p>

        )
      }







      <div className="
        grid
        grid-cols-1
        lg:grid-cols-2
        gap-6
      ">





        {/* Published Content */}


        <div className="
          bg-white
          rounded-2xl
          border
          shadow-sm
        ">


          <div className="
            p-5
            border-b
          ">


            <h2 className="
              text-xl
              font-bold
              text-green-700
            ">

              Published Content

            </h2>


            <p className="
              text-gray-500
              text-sm
            ">

              Live content available publicly.

            </p>


          </div>





          {
            publishedContent.map((content)=>(


              <div

                key={content._id}

                className="
                  p-5
                  border-b
                "

              >


                <h3 className="
                  font-bold
                  text-lg
                ">

                  {content.title}

                </h3>


                <p className="
                  text-gray-500
                  mt-2
                ">

                  {content.description}

                </p>



              </div>


            ))
          }



        </div>









        {/* Draft Content */}



        <div className="
          bg-white
          rounded-2xl
          border
          shadow-sm
        ">


          <div className="
            p-5
            border-b
          ">


            <h2 className="
              text-xl
              font-bold
              text-yellow-600
            ">

              Draft Content

            </h2>


            <p className="
              text-gray-500
              text-sm
            ">

              Review before publishing.

            </p>


          </div>






          {
            draftContent.map((content)=>(



              <div

                key={content._id}

                className="
                  p-5
                  border-b
                "

              >


                <h3 className="
                  font-bold
                  text-lg
                ">

                  {content.title}

                </h3>



                <p className="
                  text-gray-500
                  mt-2
                ">

                  {content.description}

                </p>




                <div className="
                  flex
                  gap-3
                  mt-4
                ">


                  <button

                    onClick={()=>

                      publishContent(
                        content._id
                      )

                    }

                    className="
                      bg-green-600
                      text-white
                      px-4
                      py-2
                      rounded-lg
                    "

                  >

                    Publish

                  </button>





                  <button

                    onClick={()=>

                      deleteContent(
                        content._id
                      )

                    }

                    className="
                      bg-red-600
                      text-white
                      px-4
                      py-2
                      rounded-lg
                    "

                  >

                    Delete

                  </button>


                </div>




              </div>


            ))
          }





        </div>




      </div>






    </div>

  );

}
