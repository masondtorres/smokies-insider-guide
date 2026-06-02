const navGroups = [
  {
    title: "Explore the Smokies",
    items: ["Gatlinburg", "Pigeon Forge", "Sevierville", "Townsend", "Cades Cove", "National Park"],
  },
  {
    title: "Things To Do",
    items: ["Attractions", "Family Fun", "Rainy Day", "Hiking", "Scenic Drives", "Shows", "Shopping", "Free & Cheap"],
  },
  {
    title: "Eat, Stay & Shop",
    items: ["Restaurants", "BBQ", "Breakfast", "Cabins", "Hotels", "Shopping", "Local Services"],
  },
  {
    title: "Visitor Resources",
    items: ["Parking", "Traffic", "Events", "Weather", "Webcams", "Bear Safety", "Park Rules", "Maps"],
  },
  {
    title: "Coupons & Deals",
    items: ["All Coupons", "Restaurant Deals", "Attraction Deals", "Lodging Deals", "Submit a Deal"],
  },
];

const areas = [
  ["Gatlinburg", "Walkable base for shops, food, park access and Parkway energy."],
  ["Pigeon Forge", "Best for Dollywood days, shows, rides, mini golf and family attractions."],
  ["Sevierville", "A practical gateway for food, shopping, cabins and local business stops."],
  ["Townsend", "The quieter side for Cades Cove, scenic roads, history and slower days."],
  ["Cades Cove", "Go early, expect traffic and build the day around the loop."],
  ["National Park", "Check road conditions, closures, parking tags and weather before you go."],
];

const things = [
  "Attractions",
  "Family Fun",
  "Rainy Day",
  "Hiking",
  "Scenic Drives",
  "Shows",
  "Shopping",
  "Free & Cheap",
];

const eatStayShop = ["Restaurants", "BBQ", "Breakfast", "Cabins", "Hotels", "Shopping", "Local Services"];
const resources = ["Parking", "Traffic", "Events", "Weather", "Webcams", "Bear Safety", "Park Rules", "Maps"];
const deals = ["All Coupons", "Restaurant Deals", "Attraction Deals", "Lodging Deals", "Submit a Deal"];

function Card({ title, text }: { title: string; text?: string }) {
  return (
    <a href="#" className="rounded-2xl border border-stone-200 bg-white/85 p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
      <span className="text-sm font-semibold uppercase tracking-[0.18em] text-[#8b6b2f]">Open guide</span>
      <h3 className="mt-3 text-xl font-bold text-[#203f30]">{title}</h3>
      {text ? <p className="mt-2 text-sm leading-6 text-stone-700">{text}</p> : null}
    </a>
  );
}

function SimpleCard({ title }: { title: string }) {
  return (
    <a href="#" className="rounded-xl border border-stone-200 bg-white px-4 py-4 text-sm font-bold text-[#203f30] shadow-sm transition hover:bg-[#f5eddc]">
      {title}
    </a>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f3ebd9] text-[#17251d]">
      <header className="sticky top-0 z-50 border-b border-[#d8cbb5] bg-[#f8f1e4]/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
          <a href="#" className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#203f30] text-sm font-black text-[#f3ebd9]">SIG</div>
            <div>
              <p className="text-lg font-black leading-none text-[#203f30]">Smokies Insider Guide</p>
              <p className="mt-1 text-xs font-semibold text-stone-600">Local roots. Better Smokies planning.</p>
            </div>
          </a>

          <nav className="hidden items-center gap-1 lg:flex">
            {navGroups.map((group) => (
              <div key={group.title} className="group relative">
                <a href={`#${group.title.toLowerCase().replaceAll(" ", "-")}`} className="rounded-full px-4 py-2 text-sm font-bold text-[#203f30] hover:bg-[#e8deca]">
                  {group.title}
                </a>
                <div className="invisible absolute left-0 top-10 w-64 rounded-2xl border border-[#d8cbb5] bg-white p-3 opacity-0 shadow-xl transition group-hover:visible group-hover:opacity-100">
                  {group.items.map((item) => (
                    <a key={item} href="#" className="block rounded-xl px-3 py-2 text-sm font-semibold text-stone-700 hover:bg-[#f3ebd9] hover:text-[#203f30]">
                      {item}
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </nav>

          <a href="#business" className="hidden rounded-full bg-[#c89a3c] px-5 py-3 text-sm font-black text-[#17251d] shadow-sm hover:bg-[#b88931] sm:inline-flex">
            Advertise / Get Listed
          </a>
        </div>
      </header>

      <section className="relative overflow-hidden bg-[#203f30]">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute bottom-0 left-0 right-0 h-56 bg-[radial-gradient(ellipse_at_bottom,_#566775_0%,_transparent_65%)]" />
          <div className="absolute inset-x-0 bottom-0 h-28 bg-[#17251d]" />
        </div>
        <div className="relative mx-auto grid max-w-7xl gap-10 px-5 py-20 lg:grid-cols-[1.1fr_.9fr] lg:py-28">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.25em] text-[#c89a3c]">The insider&apos;s guide to the Smokies</p>
            <h1 className="mt-5 max-w-4xl text-5xl font-black leading-tight text-[#f8f1e4] md:text-7xl">
              Plan the Smokies with people who know the place.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-[#efe5d1]">
              Find where to go, what to eat, what to skip, which deals are worth checking and which local businesses can help.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#explore-the-smokies" className="rounded-full bg-[#c89a3c] px-6 py-3 font-black text-[#17251d] hover:bg-[#b88931]">
                Explore the Smokies
              </a>
              <a href="#things-to-do" className="rounded-full border border-[#f3ebd9] px-6 py-3 font-black text-[#f3ebd9] hover:bg-white/10">
                Find Things To Do
              </a>
              <a href="#coupons-&-deals" className="rounded-full border border-[#f3ebd9] px-6 py-3 font-black text-[#f3ebd9] hover:bg-white/10">
                View Coupons
              </a>
              <a href="#business" className="rounded-full border border-[#f3ebd9] px-6 py-3 font-black text-[#f3ebd9] hover:bg-white/10">
                Get Listed
              </a>
            </div>
          </div>

          <div className="rounded-3xl border border-white/20 bg-[#f8f1e4]/95 p-6 shadow-2xl">
            <p className="text-sm font-black uppercase tracking-[0.2em] text-[#8b6b2f]">Start here</p>
            <h2 className="mt-3 text-3xl font-black text-[#203f30]">What kind of Smokies day are you trying to have?</h2>
            <div className="mt-6 grid grid-cols-2 gap-3">
              {["Family day", "Rainy day", "Food-first day", "Big views", "Dollywood day", "Cades Cove day", "Quiet-side day", "Budget day"].map((item) => (
                <a key={item} href="#" className="rounded-xl bg-white px-4 py-4 text-sm font-black text-[#203f30] shadow-sm hover:bg-[#f3ebd9]">
                  {item}
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="explore-the-smokies" className="mx-auto max-w-7xl px-5 py-16">
        <div className="mb-8 flex flex-col justify-between gap-3 md:flex-row md:items-end">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.2em] text-[#8b6b2f]">Explore by area</p>
            <h2 className="mt-2 text-4xl font-black text-[#203f30]">Pick the part of the Smokies that fits your trip.</h2>
          </div>
          <p className="max-w-xl text-sm leading-6 text-stone-700">Each area has a different pace. Gatlinburg is walkable, Pigeon Forge is attraction-heavy, Sevierville is practical and Townsend is quieter.</p>
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {areas.map(([title, text]) => <Card key={title} title={title} text={text} />)}
        </div>
      </section>

      <section id="things-to-do" className="bg-[#e7e0d4] px-5 py-16">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-black uppercase tracking-[0.2em] text-[#8b6b2f]">Things to do</p>
          <h2 className="mt-2 text-4xl font-black text-[#203f30]">Find the right activity before the day gets away from you.</h2>
          <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {things.map((item) => <SimpleCard key={item} title={item} />)}
          </div>
        </div>
      </section>

      <section id="eat-stay-&-shop" className="mx-auto max-w-7xl px-5 py-16">
        <p className="text-sm font-black uppercase tracking-[0.2em] text-[#8b6b2f]">Eat, stay and shop</p>
        <h2 className="mt-2 text-4xl font-black text-[#203f30]">Food, lodging and local stops that fit the way you travel.</h2>
        <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {eatStayShop.map((item) => <SimpleCard key={item} title={item} />)}
        </div>
      </section>

      <section id="visitor-resources" className="bg-[#203f30] px-5 py-16 text-[#f8f1e4]">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-black uppercase tracking-[0.2em] text-[#c89a3c]">Visitor resources</p>
          <h2 className="mt-2 text-4xl font-black">Check the practical stuff before you leave the cabin.</h2>
          <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {resources.map((item) => (
              <a key={item} href="#" className="rounded-xl border border-white/15 bg-white/10 px-4 py-4 text-sm font-bold hover:bg-white/15">
                {item}
              </a>
            ))}
          </div>
        </div>
      </section>

      <section id="coupons-&-deals" className="mx-auto max-w-7xl px-5 py-16">
        <p className="text-sm font-black uppercase tracking-[0.2em] text-[#8b6b2f]">Coupons and deals</p>
        <h2 className="mt-2 text-4xl font-black text-[#203f30]">Save money without chasing bad offers.</h2>
        <p className="mt-4 max-w-2xl text-stone-700">Current offers will appear as local businesses verify them. Businesses can submit restaurant, attraction, lodging and show deals for review.</p>
        <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
          {deals.map((item) => <SimpleCard key={item} title={item} />)}
        </div>
      </section>

      <section id="business" className="mx-auto max-w-7xl px-5 pb-16">
        <div className="rounded-3xl bg-[#6a4b38] p-8 text-[#f8f1e4] shadow-xl md:p-12">
          <p className="text-sm font-black uppercase tracking-[0.2em] text-[#c89a3c]">For local businesses</p>
          <h2 className="mt-3 text-4xl font-black">Get in front of Smokies visitors before they decide.</h2>
          <p className="mt-4 max-w-3xl leading-8 text-[#f3ebd9]">
            Smokies Insider Guide helps local businesses show up where visitors are planning what to do, where to eat, where to stay and which deals to check.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#" className="rounded-full bg-[#c89a3c] px-6 py-3 font-black text-[#17251d] hover:bg-[#b88931]">Advertise With Us</a>
            <a href="#" className="rounded-full border border-[#f3ebd9] px-6 py-3 font-black hover:bg-white/10">Claim Your Listing</a>
            <a href="#" className="rounded-full border border-[#f3ebd9] px-6 py-3 font-black hover:bg-white/10">Submit a Deal</a>
          </div>
        </div>
      </section>

      <footer className="border-t border-[#d8cbb5] bg-[#f8f1e4] px-5 py-8">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-4 text-sm text-stone-700 md:flex-row">
          <p className="font-bold text-[#203f30]">Smokies Insider Guide</p>
          <p>Local roots. Real connections. Better Smokies planning.</p>
        </div>
      </footer>
    </main>
  );
}
