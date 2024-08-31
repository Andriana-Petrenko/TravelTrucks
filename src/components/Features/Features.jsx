import icons from '../../assets/sprite.svg';
import css from "./Features.module.css"
const Features = ({truck}) => {
     const features = [
    { key: "transmission", label: "Automatic", svg:"diagram", value: "automatic"},
    { key: "kitchen", label: "Kitchen", svg:"cup-hot"},
    { key: "AC", label: "AC", svg:"ac" },
    { key: "bathroom", label: "Bathroom", svg:"water" },
    { key: "TV", label: "TV", svg:"tv" },
    { key: "radio", label: "Radio", svg:"radio" },
    { key: "gas", label: "Gas", svg:"fuel-pump" },
    { key: "microwave", label: "Microwave", svg:"wave" },
    { key: "refrigerator", label: "Frige", svg:"frige" },
    { key: "engine", label: "Hybrid", svg: "engine", value: "hybrid" },
    { key: "engine", label: "Diesel", svg:"engine", value: "diesel"},
    { key: "engine", label: "Petrol", svg:"engine", value: "petrol"},

  ];
  return (
    <div className={css.features}>
      {features.map((feature) => {
        const isFeatureAvailable = truck[feature.key] === true || truck[feature.key] === feature.value;
        return isFeatureAvailable ? (
          <div className={css.feature} key={feature.key}>
            <svg className={css.icon} width="20" height="20">
              <use href={`${icons}#${feature.svg}`} />
            </svg>
            <span>{feature.label}</span>
          </div>
        ) : null;
      })}
    </div>
  )
}

export default Features