import { useEffect, useState } from "react";

import axios from "axios";


import {

  UsersIcon,

  DocumentTextIcon,

  ChartBarIcon,

  ShieldCheckIcon

} from "@heroicons/react/24/outline";




// ======================
// Dashboard Cards
// ======================

const cardConfig = [

  {
    title: "Total Content",
    key: "totalContent",
    icon: DocumentTextIcon

  },


  {
    title: "Published",
    key: "publishedContent",
    icon: ChartBarIcon

  },


  {
    title: "Draft Content",
    key: "draftContent",
    icon: DocumentTextIcon

  },


  {
    title: "Total Users",
    key: "totalUsers",
    icon: UsersIcon

  }

];




// ======================
// Dashboard Component
// ======================

export default function Dashboard() {


  const [statistics, setStatistics] = useState({

    totalContent: 0,

    publishedContent: 0,

    draftContent: 0,

    totalUsers: 0

  });



  const [recentActivity, setRecentActivity] = useState([]);



  const [loading, setLoading] = useState(true);





  // ======================
  // Load Dashboard Data
  // ======================

  useEffect(() => {


    const fetchDashboard = async () => {


      try {


        const response = await axios.get(

          `${import.meta.env.VITE_API_URL}/dashboard/stats`

        );



        setStatistics(

          response.data.statistics

        );



        setRecentActivity(

          response.data.recentActivity

        );



      } catch(error) {


        console.log(

          "Dashboard loading error",

          error

        );


      } finally {


        setLoading(false);


      }


    };



    fetchDashboard();



  }, []);






  if (loading) {


    return (

      <div className="text-xl font-semibold">

        Loading dashboard...

      </div>

    );


  }






  return (


    <div className="space-y-8">


      <div>


        <h1 className="
          text-3xl
          font-bold
          text-slate-900
        ">

          Dashboard Overview

        </h1>



        <p className="
          text-gray-500
          mt-2
        ">

          Real-time platform performance and content analytics.

        </p>


      </div>







      <div className="
        grid
        grid-cols-1
        md:grid-cols-2
        xl:grid-cols-4
        gap-6
      ">


        {


          cardConfig.map((card)=>{


            const Icon = card.icon;



            return (


              <div

                key={card.key}

                className="
                  bg-white
                  rounded-2xl
                  shadow-sm
                  border
                  p-6
                "

              >


                <Icon

                  className="
                    w-10
                    h-10
                    text-blue-600
                  "

                />



                <p className="
                  text-gray-500
                  mt-5
                ">

                  {card.title}

                </p>




                <h2 className="
                  text-4xl
                  font-bold
                  mt-2
                ">


                  {statistics[card.key]}


                </h2>



              </div>


            );


          })


        }


      </div>







      <div className="
        bg-white
        rounded-2xl
        border
        shadow-sm
      ">



        <div className="
          p-6
          border-b
        ">


          <h2 className="
            text-xl
            font-bold
          ">

            Recent Content Activity

          </h2>



          <p className="
            text-gray-500
          ">

            Latest content updates from administrators.

          </p>


        </div>






        {

          recentActivity.length === 0 ?


          (

            <div className="
              p-6
              text-gray-500
            ">


              No content available yet.


            </div>


          )


          :


          recentActivity.map((item)=>(


            <div

              key={item._id}

              className="
                p-5
                border-b
                flex
                justify-between
              "

            >


              <div>


                <h3 className="
                  font-semibold
                ">

                  {item.title}

                </h3>



                <p className="
                  text-sm
                  text-gray-500
                ">

                  {new Date(
                    item.createdAt
                  ).toLocaleDateString()}

                </p>


              </div>





              <span className={

                item.status === "Published"

                ?

                "px-3 py-1 rounded-full bg-green-100 text-green-700"

                :

                "px-3 py-1 rounded-full bg-yellow-100 text-yellow-700"

              }>

                {item.status}


              </span>



            </div>


          ))

        }



      </div>




    </div>


  );


}
