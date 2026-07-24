import {
  ShieldCheckIcon,
  DocumentTextIcon,
  UserGroupIcon,
  Cog6ToothIcon,
  KeyIcon
} from "@heroicons/react/24/outline";


// ======================
// Admin Profile Page
// ======================

export default function AdminProfile() {


  const permissions = [

    {
      title: "Content Control",
      description:
        "Create, edit, publish and delete website content.",
      icon: DocumentTextIcon
    },

    {
      title: "User Management",
      description:
        "Manage users, roles and platform permissions.",
      icon: UserGroupIcon
    },

    {
      title: "System Settings",
      description:
        "Configure CMS settings and security controls.",
      icon: Cog6ToothIcon
    }

  ];



  return (

    <div className="space-y-8">



      <div>


        <h1 className="
          text-3xl
          font-bold
        ">

          Admin Profile

        </h1>


        <p className="
          text-gray-500
          mt-2
        ">

          Administrator identity, permissions and security overview.

        </p>


      </div>






      <div className="
        bg-white
        rounded-2xl
        border
        shadow-sm
        p-8
        flex
        items-center
        gap-6
      ">


        <div className="
          w-24
          h-24
          rounded-full
          bg-blue-600
          text-white
          flex
          items-center
          justify-center
          text-4xl
          font-bold
        ">

          A

        </div>





        <div>


          <h2 className="
            text-2xl
            font-bold
          ">

            Admin User

          </h2>


          <p className="
            text-gray-500
          ">

            Super Administrator

          </p>


          <div className="
            flex
            items-center
            gap-2
            text-green-600
            mt-3
          ">

            <ShieldCheckIcon
              className="
                w-5
                h-5
              "
            />

            Full System Access

          </div>


        </div>


      </div>








      <div className="
        grid
        grid-cols-1
        md:grid-cols-3
        gap-6
      ">


        {
          permissions.map((permission)=>{


            const Icon = permission.icon;


            return (

              <div

                key={permission.title}

                className="
                  bg-white
                  rounded-2xl
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


                <h3 className="
                  font-bold
                  mt-4
                ">

                  {permission.title}

                </h3>


                <p className="
                  text-gray-500
                  mt-2
                  text-sm
                ">

                  {permission.description}

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
        p-8
      ">


        <h2 className="
          text-xl
          font-bold
          mb-5
        ">

          Security Details

        </h2>



        <div className="
          space-y-4
          text-gray-600
        ">


          <p>

            <b>Role:</b> Super Admin

          </p>


          <p>

            <b>Access:</b> Complete CMS Control

          </p>


          <p>

            <b>Authentication:</b> JWT Protected

          </p>


          <p>

            <b>Available Actions:</b> Create, Update, Delete, Publish

          </p>


        </div>


      </div>




    </div>

  );

}
