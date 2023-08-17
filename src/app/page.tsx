import ActivityCard from "@/components/ActivityCard";
import activities from "@/elementContents/activity"
import WelcomeCard from "@/components/WelcomeCard";
import PendingActivitiesCard from "@/components/pendingActivitiesCard";


export default function Home() {
  return (
    <main className="min-h-screen space-y-20 mt-2">
      <div className="flex gap-20 justify-between">
        <WelcomeCard
          firstName="Kwame"
          className="flex-[2]"
        />
        <PendingActivitiesCard
          className="flex-1"
        />
      </div>
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
    </main>
  );
}
