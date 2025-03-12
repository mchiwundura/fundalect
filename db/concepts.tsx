interface Concept {
    title: string;
    definition: string;
    notes: string;
    parent: string;
    understanding: number;
    easeFactor: number;
  }
  
  const concepts: Concept[] = [
    {
      title: "External Fertilization",
      definition: "The sperm fertilizes the egg outside the body of the female, usually in water.",
      notes: "Water prevents the eggs from drying out and allows the sperm to swim towards the egg.",
      parent: "root",
      understanding: 0,
      easeFactor: 1
    },
    {
      title: "Internal Fertilisation",
      definition: "The male deposits its sperm inside the reproductive organs of the female and fertilisation occurs inside the female’s reproductive organs.",
      notes: "Allows terrestrial animals to reproduce in a dry environment without the need for water. Internal fertilisation is more certain than external fertilisation.",
      parent: "root",
      understanding: 0,
      easeFactor: 1
    },
    {
      title: "Ovipary",
      definition: "Eggs are laid and hatching takes place outside the mother’s body.",
      notes: "Egg provides nutrition for the developing embryo and protects the embryo. A shelled egg frees these animals from the need to reproduce in water.",
      parent: "root",
      understanding: 0,
      easeFactor: 1
    },
    {
      title: "Vivipary",
      definition: "The young develop inside the uterus of the mother after the eggs are fertilised internally.",
      notes: "More efficient development of the embryo as nutrients are received for a longer period from the mother’s blood through a placenta. Embryo is protected in the body of the mother.",
      parent: "root",
      understanding: 0,
      easeFactor: 1
    },
    {
      title: "Ovovivipary",
      definition: "Young develop from eggs that are fertilised internally and retained within the mother’s body after fertilisation until they hatch.",
      notes: "Embryos obtain their nutrients from the egg yolk. The eggs are protected from predators until hatching occurs.",
      parent: "root",
      understanding: 0,
      easeFactor: 1
    },
    {
      title: "Amniote Egg",
      definition: "Embryo protected by the shell of the egg; egg consists of many extraembryonic membranes that serve different functions.",
      notes: "Amniote egg protects embryo from dehydration. Yolk sac provides nutrition, Allantois for excretion, chorion for gas exchange.",
      parent: "root",
      understanding: 0,
      easeFactor: 1
    },
    {
      title: "Precocial Development",
      definition: "Hatchlings are quite well-developed when they hatch – eyes open, able to move, able to feed. Brain size and intelligence remains the same throughout their lives.",
      notes: "Hatchlings are more prepared to handle the challenges of the environment; More independent.",
      parent: "root",
      understanding: 0,
      easeFactor: 1
    },
    {
      title: "Altricial Development",
      definition: "Hatchlings are poorly-developed when they hatch. Unable to feed on their own, cannot move. Brain size and intelligence increases a lot after hatching.",
      notes: "Parental care afforded to protect the young from predators.",
      parent: "root",
      understanding: 0,
      easeFactor: 1
    },
    {
      title: "Parental Care",
      definition: "Parental care offered through building of nests, protecting the eggs, protecting the young, teaching the young.",
      notes: "Increases chances of survival of the young.",
      parent: "root",
      understanding: 0,
      easeFactor: 1
    }
  ];
  
  export { Concept, concepts };
  