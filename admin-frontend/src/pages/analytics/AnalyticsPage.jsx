import {
  ChartBarIcon,
  ArrowTrendingUpIcon,
  UsersIcon,
  EyeIcon
} from "@heroicons/react/24/outline";


// ======================
// Analytics Data
// ======================

const analyticsCards = [

  {
    title: "Visitors",
    value: "45,230",
    icon: EyeIcon
  },

  {
    title: "Users Growth",
    value: "+24%",
    icon: ArrowTrendingUpIcon
  },

  {
    title: "Active Users",
    value: "8,420",
    icon: UsersIcon
  },

  {
    title: "Performance",
    value: "98%",
    icon: ChartBarIcon
  }

];


// ======================
// Analytics Page
// ======================

export default function AnalyticsPage() {


  return (

    <div className="space-y-8">


      <div>

        <h1 className="
          text-3xl
          font-bold
          text-slate-900
        ">
          Analytics
        </h1>


        <p className="
          text-gray-500
          mt-2
        ">
          Monitor application performance and user activity.
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
          analyticsCards.map((card)=>{


            const Icon = card.icon;


            return (

              <div

                key={card.title}

                className="
                  bg-white
                  rounded-2xl
                  border
                  shadow-sm
                  p-6
                  hover:shadow-xl
                  transition
                  cursor-pointer
                "

              >


                <Icon
                  className="
                    w-10
                    h-10
                    text-blue-600
                  "
                />


                <h3 className="
                  mt-5
                  text-gray-500
                ">
                  {card.title}
                </h3>


                <p className="
                  text-3xl
                  font-bold
                  mt-2
                ">
                  {card.value}
                </p>


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
        p-8
      ">


        <h2 className="
          text-xl
          font-bold
        ">
          Monthly Report
        </h2>


        <div className="
          mt-6
          h-48
          rounded-xl
          bg-gradient-to-r
          from-blue-600
          to-purple-600
          flex
          items-center
          justify-center
          text-white
          text-2xl
          font-bold
        ">

          Analytics Chart Area

        </div>


      </div>


    </div>

  );

}
