
const users = [

  {

    name:"Admin",

    role:"Super Admin",

    status:"Active"

  },


  {

    name:"Editor",

    role:"Content Manager",

    status:"Active"

  }


];




// ======================
// Users Management
// ======================

export default function UsersPage(){


  return (

    <div className="
      space-y-8
    ">



      <div>


        <h1 className="
          text-3xl
          font-bold
        ">

          Users Management

        </h1>


        <p className="
          text-gray-500
        ">

          Manage roles and permissions.

        </p>


      </div>





      <div className="
        bg-white
        border
        rounded-2xl
        overflow-hidden
      ">



        <table className="
          w-full
        ">



          <thead className="
            bg-gray-50
          ">


            <tr>


              <th className="p-4 text-left">

                Name

              </th>


              <th className="p-4 text-left">

                Role

              </th>


              <th className="p-4 text-left">

                Status

              </th>


            </tr>


          </thead>




          <tbody>


            {

              users.map((user)=>(


                <tr

                  key={user.name}

                  className="
                    border-t
                  "

                >


                  <td className="p-4">

                    {user.name}

                  </td>


                  <td className="p-4">

                    {user.role}

                  </td>


                  <td className="p-4 text-green-600 font-semibold">

                    {user.status}

                  </td>


                </tr>


              ))

            }


          </tbody>



        </table>


      </div>


    </div>


  );


}
