import icons from '../../assets/sprite.svg';
import css from "./Features.module.css"
const Features = ({truck}) => {
     const features = [
    { key: "automatic", label: "Automatic", svg:"diagrama"},
    { key: "kitchen", label: "Kitchen", svg:"cup-hot"},
    { key: "AC", label: "AC", svg:"ac" },
    { key: "bathroom", label: "Bathroom", svg:"water" },
    { key: "TV", label: "TV", svg:"tv" },
    { key: "radio", label: "Radio", svg:"radio" },
    { key: "gas", label: "Gas", svg:"fuel-pump" },
  ];
  return (
    <div className={css.features}>
      {features.map(
        (feature) =>
          truck[feature.key] && (
            <div className={css.feature} key={feature.key}>
              <svg className={css.icon} width="20" height="20">
                          <use href={`${icons}#${feature.svg}`} />
                      </svg>
              <span>{feature.label}</span>
            </div>
          )
      )}
    </div>
  )
}

export default Features