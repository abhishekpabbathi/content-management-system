import {
  NavLink,
  Outlet,
  useNavigate
} from "react-router-dom";


import {
  HomeIcon,
  DocumentTextIcon,
  UserGroupIcon,
  ChartBarIcon,
  Cog6ToothIcon,
  ArrowRightOnRectangleIcon
} from "@heroicons/react/24/outline";



// ======================
// Sidebar Menu Items
// ======================

const menuItems = [

  {
    name: "Dashboard",
    path: "/dashboard",
    icon: HomeIcon
  },

  {
    name: "Content",
    path: "/content",
    icon: DocumentTextIcon
  },

  {
    name: "Users",
    path: "/users",
    icon: UserGroupIcon
  },

  {
    name: "Analytics",
    path: "/analytics",
    icon: ChartBarIcon
  },

  {
    name: "Settings",
    path: "/settings",
    icon: Cog6ToothIcon
  }

];




// ======================
// Layout Component
// ======================

export default function Layout() {


  const navigate = useNavigate();



  const logout = () => {

    localStorage.removeItem(
      "adminToken"
    );

    navigate("/login");

  };



  return (

    <div className="
      flex
      h-screen
      bg-slate-100
    ">


      {/* Sidebar */}

      <aside className="
        w-72
        bg-slate-950
        text-white
        flex
        flex-col
      ">


        <div className="
          p-6
          border-b
          border-slate-800
        ">


          <h1 className="
            text-2xl
            font-bold
          ">

            CMS Admin

          </h1>


          <p className="
            text-sm
            text-slate-400
          ">

            Enterprise Panel

          </p>


        </div>



        <nav className="
          flex-1
          p-5
          space-y-2
        ">


          {
            menuItems.map((item)=>{


              const Icon = item.icon;


              return (

                <NavLink

                  key={item.name}

                  to={item.path}

                  className={({isActive}) =>

                    `
                    flex
                    items-center
                    gap-3
                    px-4
                    py-3
                    rounded-xl
                    transition-all
                    
                    ${
                      isActive

                      ?

                      "bg-blue-600 text-white shadow-lg"

                      :

                      "text-slate-300 hover:bg-slate-800"

                    }

                    `

                  }

                >


                  <Icon className="
                    w-5
                    h-5
                  "/>


                  {item.name}


                </NavLink>

              );


            })
          }


        </nav>




        <button

          onClick={logout}

          className="
            m-5
            flex
            items-center
            justify-center
            gap-2
            bg-red-600
            hover:bg-red-700
            rounded-xl
            py-3
          "

        >

          <ArrowRightOnRectangleIcon
            className="
              w-5
              h-5
            "
          />

          Logout


        </button>



      </aside>





      {/* Main Area */}


      <main className="
        flex-1
        overflow-y-auto
      ">


        <header className="
          h-20
          bg-white
          shadow-sm
          flex
          items-center
          justify-between
          px-8
        ">


          <div>


            <h2 className="
              text-xl
              font-bold
            ">

              Admin Dashboard

            </h2>


            <p className="
              text-sm
              text-gray-500
            ">

              Manage your platform

            </p>


          </div>



          <div className="
            flex
            items-center
            gap-3
          ">


            <div className="
              text-right
            ">


              <p className="
                font-semibold
              ">

                Admin

              </p>


              <p className="
                text-xs
                text-gray-500
              ">

                Super User

              </p>


            </div>



            <div

              onClick={() => navigate("/profile")}

              className="
              w-12
              h-12
              rounded-full
              bg-blue-600
              text-white
              flex
              items-center
              justify-center
              font-bold
              cursor-pointer
              hover:scale-105
              transition
            ">

              A

            </div>


          </div>


        </header>



        <section className="
          p-8
        ">


          <Outlet />


        </section>



      </main>



    </div>

  );

}
