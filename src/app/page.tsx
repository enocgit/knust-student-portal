import ActivityCard from "@/components/ActivityCard";
import activities from "@/elementContents/activities"
import WelcomeCard from "@/components/WelcomeCard";
import PendingActivitiesCard from "@/components/pendingActivitiesCard";


export default function Home() {
  return (
    <main className="min-h-screen space-y-10 mt-2">
      <div className="gap-20 justify-between min-[260px]:flex">
        <WelcomeCard
          firstName="Kwame"
          className="min-[260px]:flex-[2]"
        />
        <PendingActivitiesCard
          className="flex-1 hidden lg:inline-flex"
        />
      </div>
      <hr className="w-full bg-gray-400" />
      <div className="space-y-3">
        <h1 className="font-bold">Activities</h1>
        <div className="flex flex-wrap gap-5">
          {activities.map((activity, index) => {
            const { name, icon, iconBackground } = activity
            return (
              <ActivityCard
                key={index}
                name={name}
                icon={icon}
                iconBackground={iconBackground}
              />
            )
          })}
        </div>
        {/* <BottomDrawer /> */}
      </div>
      <small className="text-black/100 text-center block">Copyright &copy; 2023 Kwame Nkrumah University Of Science and Technology. All Rights Reserved</small>
    </main>
  );
}
