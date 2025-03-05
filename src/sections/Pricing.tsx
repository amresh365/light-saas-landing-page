import CheakIcon from "@/assets/check.svg";
const pricingTiers = [
  {
    title: "Free",
    bg: "white",
    textColor: "black",
    monthlyPrice: 0,
    buttonText: "Get started for free",
    popular: false,
    inverse: false,
    features: [
      "Up to 5 project members",
      "Unlimited tasks and projects",
      "2GB storage",
      "Integrations",
      "Basic support",
    ],
  },
  {
    title: "Pro",
    bg: "black",
    textColor: "white",
    monthlyPrice: 9,
    buttonText: "Sign up now",
    popular: true,
    inverse: true,
    features: [
      "Up to 50 project members",
      "Unlimited tasks and projects",
      "50GB storage",
      "Integrations",
      "Priority support",
      "Advanced support",
      "Export support",
    ],
  },
  {
    title: "Business",
    bg: "white",
    textColor: "black",
    monthlyPrice: 19,
    buttonText: "Sign up now",
    popular: false,
    inverse: false,
    features: [
      "Up to 5 project members",
      "Unlimited tasks and projects",
      "200GB storage",
      "Integrations",
      "Dedicated account manager",
      "Custom fields",
      "Advanced analytics",
      "Export capabilities",
      "API access",
      "Advanced security features",
    ],
  },
];

export const Pricing = () => {
  return (
    <section>
      <div className="container">
        <h2 className=" section-title">Pricing</h2>
        <p className=" section-description ">
          Free forever. Upgrade for unlimited tasks,better security, and
          exclusive feature
        </p>
        <div className="text-center flex flex-wrap justify-center p-4">
          {pricingTiers.map((tier) => (
            <div
              className={`border rounded-3xl p-4 m-4 shadow-lg bg-${tier.bg} text-${tier.textColor} `}
            >
              <h3 className="text-left">{tier.title}</h3>
              <h4 className="font-bold text-5xl text-left mt-3">
                ${tier.monthlyPrice}
                <span className="text-sm tracking-tight">/month</span>
              </h4>
              <button
                className={`w-full mr-2 mt-5 text-${tier.bg} bg-${tier.textColor} rounded-xl p-2`}
              >
                {tier.buttonText}
              </button>
              <ul className="mt-5">
                {tier.features.map((feature) => (
                  <li className="flex items-center m-2 p-1 ">
                    <CheakIcon className="h-6 w-6 ml-1" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
