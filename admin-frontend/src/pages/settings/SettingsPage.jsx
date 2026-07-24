import { useState } from "react";


// ======================
// Settings Page
// ======================

export default function SettingsPage() {


  const [settings, setSettings] = useState({

    platformName: "CMS Admin",

    emailNotification: true,

    maintenanceMode: false,

    autoPublish: false

  });



  const updateSetting = (key) => {


    setSettings({

      ...settings,

      [key]: !settings[key]

    });


  };





  return (

    <div className="space-y-8">



      <div>


        <h1 className="
          text-3xl
          font-bold
          text-slate-900
        ">

          System Settings

        </h1>


        <p className="
          text-gray-500
          mt-2
        ">

          Configure platform preferences, security and CMS behavior.

        </p>


      </div>






      <div className="
        grid
        grid-cols-1
        lg:grid-cols-2
        gap-6
      ">





        {/* Platform Settings */}


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

            Platform Configuration

          </h2>




          <label className="
            text-sm
            font-medium
          ">

            Platform Name

          </label>



          <input

            value={settings.platformName}

            onChange={(event)=>

              setSettings({

                ...settings,

                platformName:event.target.value

              })

            }

            className="
              w-full
              mt-2
              border
              rounded-xl
              p-3
            "

          />


        </div>








        {/* Security Settings */}



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

            Security & Control

          </h2>





          <div className="
            space-y-5
          ">



            <SettingToggle

              title="Email Notifications"

              description="Receive system alerts and updates."

              value={
                settings.emailNotification
              }

              onClick={()=>

                updateSetting(
                  "emailNotification"
                )

              }

            />





            <SettingToggle

              title="Maintenance Mode"

              description="Temporarily disable public access."

              value={
                settings.maintenanceMode
              }

              onClick={()=>

                updateSetting(
                  "maintenanceMode"
                )

              }

            />





            <SettingToggle

              title="Auto Publish"

              description="Automatically publish approved content."

              value={
                settings.autoPublish
              }

              onClick={()=>

                updateSetting(
                  "autoPublish"
                )

              }

            />



          </div>



        </div>






      </div>







      <div className="
        bg-blue-50
        border
        border-blue-200
        rounded-2xl
        p-6
      ">


        <h2 className="
          font-bold
          text-lg
        ">

          Administrator Information

        </h2>


        <p className="
          mt-2
          text-gray-600
        ">

          Logged in as Admin Super User.

        </p>



      </div>





    </div>

  );

}






// ======================
// Toggle Component
// ======================

function SettingToggle({

  title,

  description,

  value,

  onClick

}) {


  return (

    <div className="
      flex
      items-center
      justify-between
    ">


      <div>


        <h3 className="
          font-semibold
        ">

          {title}

        </h3>


        <p className="
          text-sm
          text-gray-500
        ">

          {description}

        </p>


      </div>




      <button

        onClick={onClick}

        className={

          value

          ?

          "w-12 h-6 rounded-full bg-blue-600"

          :

          "w-12 h-6 rounded-full bg-gray-300"

        }

      >

        <span className={

          value

          ?

          "block w-5 h-5 bg-white rounded-full ml-6"

          :

          "block w-5 h-5 bg-white rounded-full ml-1"

        } />


      </button>



    </div>

  );

}
