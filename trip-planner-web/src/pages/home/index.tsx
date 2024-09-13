import { LocationCard } from "../../components/location-card";
import { ActivityList } from "./components/activity-list";
import { ActivityForm } from "./components/activity-form";

export function HomePage() {
  return (
    <section className="flex flex-col md:flex-row justify-start items-start gap-8">
      <div className="w-full md:basis-1/4">
        <div className="flex flex-col gap-8">
          <LocationCard />
          <ActivityForm />
        </div>
      </div>

      <div className="w-full md:basis-3/4">
        <ActivityList />
      </div>
    </section>
  );
}
