const data = {
  "contents": {
    "1": [
      {
        "data": {
          "Title": "Newton's Laws and Friction",
          "icon": "🍎",
          "flashcards": [
            {
              "front": {
                "title": "Normal Force",
                "question": "What is the normal force and its direction relative to the surface?"
              },
              "back": "The force exerted by a surface on an object in contact with it.  It's perpendicular to the surface."
            },
            {
              "front": {
                "title": "Frictional Force",
                "question": "Describe frictional force and its relationship to the normal force."
              },
              "back": "A force opposing motion between surfaces in contact. Its magnitude is proportional to the normal force."
            },
            {
              "front": {
                "title": "Coefficients of Friction",
                "question": "What are μs and μk, and how are they used?"
              },
              "back": "μs (coefficient of static friction) and μk (coefficient of kinetic friction) are constants determining the magnitude of frictional force given the normal force.  μs applies when objects are at rest, μk when they're moving."
            },
            {
              "front": {
                "title": "Force Components on a Slope",
                "question": "How are the components of gravity (Fg) resolved parallel and perpendicular to a slope?"
              },
              "back": "\n      Fg sin(θ)\n Fgx = ──────\n           1\n\n      Fg cos(θ)\n Fgy = ──────\n           1\n"
            },
            {
              "front": {
                "title": "Newton's First Law",
                "question": "State Newton's First Law of Motion."
              },
              "back": "An object at rest stays at rest and an object in motion stays in motion with the same speed and in the same direction unless acted upon by an unbalanced force."
            },
            {
              "front": {
                "title": "Newton's Second Law",
                "question": "State Newton's Second Law and give its formula."
              },
              "back": "The acceleration of an object is directly proportional to the net force acting on the object, is in the same direction as the net force, and is inversely proportional to the mass of the object.\n\n`Fnet = ma`"
            },
            {
              "front": {
                "title": "Newton's Third Law",
                "question": "State Newton's Third Law of Motion."
              },
              "back": "For every action, there is an equal and opposite reaction."
            },
            {
              "front": {
                "title": "Newton's Law of Universal Gravitation",
                "question": "State Newton's Law of Universal Gravitation and provide its formula."
              },
              "back": "Every particle attracts every other particle in the universe with a force which is directly proportional to the product of their masses and inversely proportional to the square of the distance between their centers.\n\n      Gm1m2\n F = ──────\n       d^2\n"
            }
          ]
        },
        "content": "\n# Newton's Laws and Friction\n\n## Forces and Motion\n\nThe **normal force** (N⃗) is the force exerted by a surface on an object in contact with it. This force is always perpendicular to the surface.\n\n**Frictional force** opposes the motion of an object in contact with a surface and acts parallel to the surface.  Its magnitude is proportional to the normal force.\n\nThe **coefficient of friction** (μ) is a constant factor relating frictional force to the normal force.  There are two types:\n\n*   **μs:** coefficient of static friction (objects at rest)\n*   **μk:** coefficient of kinetic friction (objects in motion)\n\nOn a slope with angle θ, the components of the force due to gravity (Fg) are:\n\n```math\n      Fg sin(θ)\n Fgx = ──────\n           1\n```\n\n```math\n      Fg cos(θ)\n Fgy = ──────\n           1\n```\n\n\n## Newton's Laws of Motion\n\n*   **Newton's First Law (Inertia):** An object continues in a state of rest or uniform motion unless acted upon by an unbalanced force.\n\n*   **Newton's Second Law:**  The acceleration of an object is directly proportional to the net force acting on it, in the same direction as the net force, and inversely proportional to its mass.  This is represented by the formula:  `Fnet = ma`\n\n*   **Newton's Third Law:** For every action, there is an equal and opposite reaction.\n\n\n## Newton's Law of Universal Gravitation\n\nEvery point mass attracts every other point mass by a force proportional to the product of their masses and inversely proportional to the square of the distance between them:\n\n```math\n      Gm1m2\n F = ──────\n       d^2\n```\n\n## Physical Quantities and Units\n\n| Quantity        | Unit Name             | Unit Symbol |\n|-----------------|-----------------------|-------------|\n| Acceleration (a) | metres per second²    | m·s⁻²       |\n| Distance (d)     | metre                 | m           |\n| Force (F)       | Newton                | N           |\n| Mass (m)        | kilogram              | kg          |\n| Tension (T)     | Newton                | N           |\n| Weight (W)      | Newton                | N           |\n\n"
      },
      {
        "data": {
          "Title": "Electromagnetism Fundamentals",
          "icon": "🧲",
          "flashcards": [
            {
              "front": {
                "title": "Electromagnetism",
                "question": "What is electromagnetism?"
              },
              "back": "The study of the properties and relationship between electric currents and magnetism."
            },
            {
              "front": {
                "title": "Magnetic Field around a Conductor",
                "question": "What happens when a current flows through a conductor?"
              },
              "back": "A magnetic field is produced around the conductor."
            },
            {
              "front": {
                "title": "Right Hand Rule",
                "question": "How do you determine the direction of the magnetic field around a current-carrying conductor?"
              },
              "back": "Use the Right Hand Rule."
            },
            {
              "front": {
                "title": "Electromagnet",
                "question": "What is an electromagnet?"
              },
              "back": "A temporary magnet created by a current-carrying conductor."
            },
            {
              "front": {
                "title": "Magnetic Flux",
                "question": "How is magnetic flux calculated?"
              },
              "back": "Magnetic flux (Φ) = BAcos(θ), where B is the magnetic field, A is the surface area, and θ is the angle between the field and the surface normal."
            },
            {
              "front": {
                "title": "Electromagnetic Induction",
                "question": "What is electromagnetic induction?"
              },
              "back": "The generation of a voltage in a conductor due to a changing magnetic field."
            },
            {
              "front": {
                "title": "Faraday's Law of Electromagnetic Induction",
                "question": "State Faraday's Law of Electromagnetic Induction."
              },
              "back": "The magnitude of the induced emf (ε) is given by: ε = -N(ΔΦ/Δt), where N is the number of turns, and ΔΦ/Δt is the rate of change of magnetic flux."
            },
            {
              "front": {
                "title": "Units in Electromagnetism",
                "question": "What are the units for induced emf, magnetic field, and magnetic flux?"
              },
              "back": "| Quantity | Unit Name | Unit Symbol |\n|---|---|---|\n| Induced emf (ε) | Volt | V |\n| Magnetic field (B) | Tesla | T |\n| Magnetic flux (Φ) | Weber | Wb |\n| Time (t) | seconds | s |"
            }
          ]
        },
        "content": "\n## Electromagnetism Fundamentals\n\n### Introduction\n\nElectromagnetism studies the relationship between electric currents and magnetism.  A key principle is that a current-carrying conductor generates a magnetic field around it. The direction of this field is determined using the Right Hand Rule.\n\n### Electromagnets\n\nElectromagnets are temporary magnets created by passing an electric current through a conductor, often coiled around a ferromagnetic core.  Their magnetic properties exist only while the current is flowing.\n\n\n### Magnetic Flux and Electromagnetic Induction\n\n*   **Magnetic Flux (Φ):**  The magnetic flux through a surface is the product of the magnetic field component perpendicular to the surface and the surface area.  It's calculated as:\n\n```math\n      B * A * cos(θ)\nΦ =  ────────────\n            1\n```\n\nwhere:\n    * B = magnetic field strength\n    * A = surface area\n    * θ = angle between the magnetic field and the surface normal\n\n*   **Electromagnetic Induction:** A changing magnetic field induces a voltage (electromotive force or emf) in a conductor.\n\n*   **Faraday's Law:**  Quantifies the induced emf:\n\n```math\n           -N * ΔΦ\nε =  ─────────────\n            Δt\n```\n\nWhere:\n    * ε = induced electromotive force\n    * N = number of turns in the coil\n    * ΔΦ = change in magnetic flux\n    * Δt = change in time\n\n### Units of Measurement\n\n| Quantity          | Unit Name | Unit Symbol |\n|-----------------|------------|-------------|\n| Induced emf (ε)   | Volt       | V           |\n| Magnetic Field (B) | Tesla      | T           |\n| Magnetic Flux (Φ) | Weber      | Wb          |\n| Time (t)          | Second     | s           |\n\n"
      },
      {
        "data": {
          "Title": "Ohm's Law and Electrical Circuits",
          "icon": "💡",
          "flashcards": [
            {
              "front": {
                "title": "Ohm's Law",
                "question": "State Ohm's Law and write its formula."
              },
              "back": "Ohm's Law states that the current through a conductor is proportional to the voltage across it, at constant temperature.  Formula:  `I = V/R`"
            },
            {
              "front": {
                "title": "Ohmic vs. Non-Ohmic Conductors",
                "question": "What is the difference between ohmic and non-ohmic conductors?"
              },
              "back": "Ohmic conductors obey Ohm's Law; their resistance is constant. Non-ohmic conductors do not obey Ohm's Law; their resistance changes with voltage or current."
            },
            {
              "front": {
                "title": "Calculating Resistance",
                "question": "How do you calculate the resistance of a resistor using Ohm's Law?"
              },
              "back": "Formula: `R = V/I`"
            },
            {
              "front": {
                "title": "Resistors in Series",
                "question": "How do you calculate the equivalent resistance of resistors connected in series?"
              },
              "back": "Formula: `Rs = R1 + R2 + R3 + ... + Rn`"
            },
            {
              "front": {
                "title": "Resistors in Parallel",
                "question": "How do you calculate the equivalent resistance of resistors connected in parallel?"
              },
              "back": "Formula: `1/Rp = 1/R1 + 1/R2 + 1/R3 + ... + 1/Rn`"
            },
            {
              "front": {
                "title": "Electrical Power",
                "question": "Define electrical power and give three formulas for calculating it."
              },
              "back": "Electrical power is the rate of electrical energy conversion. Formulas: `P = VI`, `P = I²R`, `P = V²/R`"
            },
            {
              "front": {
                "title": "Electrical Energy",
                "question": "How do you calculate electrical energy dissipated in a circuit?"
              },
              "back": "Formula: `E = Pt`"
            },
            {
              "front": {
                "title": "Kilowatt Hour",
                "question": "What is a kilowatt-hour (kWh)?"
              },
              "back": "A kilowatt-hour is the energy used by a 1 kW device operating for one hour."
            }
          ]
        },
        "content": "\nOhm's Law and Electrical Circuits 💡\n\n# Ohm's Law and Electrical Circuits\n\nOhm's Law describes the relationship between voltage, current, and resistance in an electrical circuit.  It states that the current through a conductor between two points is directly proportional to the voltage across the two points and inversely proportional to the resistance between them, provided the temperature remains constant.\n\n## Key Concepts\n\n* **Ohm's Law:**  `I = V/R` where:\n    * `I` is current (Amperes, A)\n    * `V` is voltage (Volts, V)\n    * `R` is resistance (Ohms, Ω)\n\n* **Ohmic Conductors:** Conductors that obey Ohm's Law.  Their resistance remains constant regardless of the applied voltage.\n\n* **Non-Ohmic Conductors:** Conductors that do not obey Ohm's Law. Their resistance changes with voltage or current.\n\n* **Calculating Resistance:**  Using Ohm's Law, we can calculate resistance: `R = V/I`\n\n## Series and Parallel Circuits\n\n### Resistors in Series\n\nThe equivalent resistance (Rs) of resistors connected in series is the sum of their individual resistances:\n\n```math\nRs = R1 + R2 + R3 + ... + Rn\n```\n\n### Resistors in Parallel\n\nThe reciprocal of the equivalent resistance (Rp) of resistors connected in parallel is the sum of the reciprocals of their individual resistances:\n\n```math\n      1\n1/Rp = ─────\n     1/R1 + 1/R2 + 1/R3 + ... + 1/Rn\n```\n\n\n## Electrical Power and Energy\n\n* **Electrical Power (P):** The rate at which electrical energy is converted. It is measured in Watts (W).  Formulas:\n\n    * `P = VI`\n    * `P = I²R`\n    * `P = V²/R`\n\n* **Electrical Energy (E):** The total amount of electrical energy converted. It is measured in Joules (J). Formula:\n\n    * `E = Pt`\n\n\n## Units\n\n| Quantity           | Unit Name | Unit Symbol |\n|--------------------|------------|-------------|\n| Current (I)        | Amperes    | A           |\n| Electrical Energy (E) | Joules     | J           |\n| Power (P)          | Watts      | W           |\n| Resistance (R)     | Ohms       | Ω           |\n| Voltage (V)        | Volts      | V           |\n\n"
      },
      {
        "data": {
          "Title": "Energy Changes in Chemical Reactions",
          "icon": "⚛️",
          "flashcards": [
            {
              "front": {
                "title": "Bond Energy",
                "question": "What is bond energy and how is it measured?"
              },
              "back": "Bond energy is the amount of energy required to break a chemical bond between two atoms. It's measured in kJ·mol⁻¹."
            },
            {
              "front": {
                "title": "Enthalpy",
                "question": "What does enthalpy (H) represent?"
              },
              "back": "Enthalpy is a measure of the total energy of a chemical system at constant pressure."
            },
            {
              "front": {
                "title": "Exothermic Reaction",
                "question": "Describe an exothermic reaction and its enthalpy change (ΔH)."
              },
              "back": "An exothermic reaction releases energy as heat or light.  The energy of the products is less than the energy of the reactants, resulting in a negative ΔH (ΔH < 0)."
            },
            {
              "front": {
                "title": "Endothermic Reaction",
                "question": "Describe an endothermic reaction and its enthalpy change (ΔH)."
              },
              "back": "An endothermic reaction absorbs energy as heat or light. The energy of the products is greater than the energy of the reactants, resulting in a positive ΔH (ΔH > 0)."
            },
            {
              "front": {
                "title": "Heat of Reaction (ΔH)",
                "question": "How is the heat of reaction calculated?"
              },
              "back": "ΔH = E<sub>prod</sub> - E<sub>react</sub>, where E<sub>prod</sub> is the energy of the products and E<sub>react</sub> is the energy of the reactants."
            },
            {
              "front": {
                "title": "Activation Energy",
                "question": "What is activation energy?"
              },
              "back": "Activation energy is the minimum amount of energy needed to start a chemical reaction."
            },
            {
              "front": {
                "title": "Activated Complex",
                "question": "What is an activated complex?"
              },
              "back": "The activated complex (or transition state) is a high-energy, short-lived intermediate state formed during a reaction, where bonds in reactants are breaking and bonds in products are forming."
            }
          ]
        },
        "content": "\n## Energy Changes in Chemical Reactions\n\nChemical reactions involve the breaking and forming of bonds, which always involve energy changes.  When bonds break, energy is absorbed; when new bonds form, energy is released.\n\n### Bond Energy and Enthalpy\n\n* **Bond energy:**  The amount of energy required to break one mole of a specific type of bond. Measured in kJ·mol⁻¹.\n* **Enthalpy (H):** The total energy content of a system at constant pressure.\n\n### Exothermic and Endothermic Reactions\n\n* **Exothermic Reactions:** Release energy to the surroundings. ΔH is negative (ΔH < 0). Examples include combustion and respiration.\n* **Endothermic Reactions:** Absorb energy from the surroundings. ΔH is positive (ΔH > 0). Examples include photosynthesis and the thermal decomposition of limestone.\n\nThe difference in energy between reactants and products is the **heat of reaction (ΔH)**.  It's calculated as:\n\n```math\n      E_prod\nΔH = ──────\n      E_react\n```\n\nWhere E<sub>prod</sub> is the total energy of the products and E<sub>react</sub> is the total energy of the reactants.\n\n### Activation Energy\n\nAll reactions require a minimum amount of energy to start, called the **activation energy**.  This energy is needed to overcome the energy barrier and form the **activated complex**, a temporary, high-energy intermediate state during the reaction.\n"
      },
      {
        "data": {
          "Title": "Acid-Base and Redox Reactions",
          "icon": "🧪",
          "flashcards": [
            {
              "front": {
                "title": "Arrhenius Acids and Bases",
                "question": "Define Arrhenius acids and bases."
              },
              "back": "Arrhenius acid: Increases the concentration of hydronium ions (H₃O⁺) in solution. Arrhenius base: Increases the concentration of hydroxide ions (OH⁻) in solution.  This definition is limited to aqueous solutions."
            },
            {
              "front": {
                "title": "Brønsted-Lowry Acids and Bases",
                "question": "Define Brønsted-Lowry acids and bases."
              },
              "back": "Brønsted-Lowry acid: Proton (H⁺) donor. Brønsted-Lowry base: Proton (H⁺) acceptor."
            },
            {
              "front": {
                "title": "Amphoteric Substance",
                "question": "What is an amphoteric substance?"
              },
              "back": "A substance that can act as both an acid and a base. Water (H₂O) is an example."
            },
            {
              "front": {
                "title": "Amphiprotic Substance",
                "question": "What is an amphiprotic substance?"
              },
              "back": "A substance that can act as both a proton donor and a proton acceptor. HCO₃⁻ and HSO₄⁻ are examples."
            },
            {
              "front": {
                "title": "Conjugate Acid-Base Pair",
                "question": "What is a conjugate acid-base pair?"
              },
              "back": "Two species that differ by a single proton (H⁺). One is an acid, the other its conjugate base (or vice versa)."
            },
            {
              "front": {
                "title": "Neutralization Reaction",
                "question": "What is a neutralization reaction?"
              },
              "back": "A reaction between an acid and a base."
            },
            {
              "front": {
                "title": "Acid-Metal Hydroxide Reaction",
                "question": "What are the products of an acid reacting with a metal hydroxide?"
              },
              "back": "A salt and water."
            },
            {
              "front": {
                "title": "Acid-Metal Oxide Reaction",
                "question": "What are the products of an acid reacting with a metal oxide?"
              },
              "back": "A salt and water."
            },
            {
              "front": {
                "title": "Acid-Metal Carbonate Reaction",
                "question": "What are the products of an acid reacting with a metal carbonate?"
              },
              "back": "A salt, water, and carbon dioxide."
            },
            {
              "front": {
                "title": "Oxidation",
                "question": "Define oxidation."
              },
              "back": "Loss of electrons."
            },
            {
              "front": {
                "title": "Reduction",
                "question": "Define reduction."
              },
              "back": "Gain of electrons."
            },
            {
              "front": {
                "title": "Redox Reaction",
                "question": "What is a redox reaction?"
              },
              "back": "A reaction involving both oxidation and reduction; a transfer of electrons."
            },
            {
              "front": {
                "title": "Oxidation Number",
                "question": "What is an oxidation number?"
              },
              "back": "The charge an atom would have if the compound were composed entirely of ions."
            },
            {
              "front": {
                "title": "Oxidizing and Reducing Agents",
                "question": "Define oxidizing and reducing agents."
              },
              "back": "Oxidizing agent: The species that is reduced (gains electrons). Reducing agent: The species that is oxidized (loses electrons)."
            },
            {
              "front": {
                "title": "Half-Reaction",
                "question": "What is a half-reaction?"
              },
              "back": "Either the oxidation or reduction portion of a redox reaction."
            }
          ]
        },
        "content": "\n## Acid-Base and Redox Reactions\n\n### Acid-Base Reactions\n\nSeveral definitions describe acids and bases:\n\n*   **Arrhenius:** Acids increase H₃O⁺ concentration; bases increase OH⁻ concentration (in water).\n*   **Brønsted-Lowry:** Acids donate protons (H⁺); bases accept protons.\n\nAn **amphoteric** substance can act as both an acid and a base (e.g., water). An **amphiprotic** substance can donate or accept protons (e.g., HCO₃⁻, HSO₄⁻). A **conjugate acid-base pair** differs by one proton.  Acid-base reactions are **neutralization** reactions.  They have various applications in domestic settings, biology, and industry. Indicators change color depending on the pH.  Reactions of acids with metal hydroxides, oxides, and carbonates produce salts and water (and carbon dioxide in the carbonate case).\n\n### Redox Reactions\n\n*   **Oxidation:** Loss of electrons.\n*   **Reduction:** Gain of electrons.\n*   **Redox reaction:** Involves both oxidation and reduction, with a change in oxidation numbers.  Electrons are transferred between species.\n*   **Oxidation number:** The charge an atom would have if the compound were ionic.  An increase in oxidation number signifies oxidation; a decrease signifies reduction.\n*   A **half-reaction** shows either oxidation or reduction.  In a complete redox reaction, the number of electrons lost equals the number of electrons gained.\n*   An **oxidizing agent** is reduced; a **reducing agent** is oxidized.\n\n"
      },
      {
        "data": {
          "Title": "Earth's Lithosphere and Mineral Resources",
          "icon": "🌎",
          "flashcards": [
            {
              "front": {
                "title": "Lithosphere",
                "question": "What is the Earth's lithosphere composed of?"
              },
              "back": "The lithosphere is the rigid outer part of the Earth, consisting of the crust and upper mantle."
            },
            {
              "front": {
                "title": "Mineral Resources",
                "question": "What are some examples of mineral resources found in the lithosphere?"
              },
              "back": "The lithosphere is a rich source of many minerals, which can be extracted through mining."
            },
            {
              "front": {
                "title": "Environmental Impact of Mining",
                "question": "What is the environmental impact of mining and mineral use?"
              },
              "back": "Mining and mineral use have a significant impact on the environment."
            },
            {
              "front": {
                "title": "Other Lithosphere Resources",
                "question": "Besides minerals, what other resources are found in the lithosphere?"
              },
              "back": "Fuels are another important resource found within the lithosphere."
            }
          ]
        },
        "content": "\n## Earth's Lithosphere and Mineral Resources\n\nThe Earth's lithosphere is a significant source of various minerals and fuels.  This rigid outer layer comprises the crust and the upper mantle.\n\n### Mineral Extraction and Use\n\nHumans have utilized the Earth's mineral resources for centuries.  Mining techniques are employed to extract these minerals.  The process involves removing minerals from the Earth's crust.\n\n### Environmental Considerations\n\nIt is crucial to acknowledge that mining and the utilization of mineral resources have considerable environmental consequences. These impacts must be carefully considered and mitigated to ensure sustainable practices.\n\n### Types of Resources\n\nThe lithosphere provides a variety of resources including:\n\n* **Minerals:**  A wide range of minerals are extracted for various uses.\n* **Fuels:**  Fossil fuels, such as coal and oil, are also found within the lithosphere.\n\nThe extraction and use of these resources must be balanced with the need for environmental protection.\n"
      },
      {
        "data": {
          "Title": "Chemical Bonding and Molecular Structure",
          "icon": "⚛️",
          "flashcards": [
            {
              "front": {
                "title": "Chemical Bond",
                "question": "What is a chemical bond?"
              },
              "back": "A physical process causing atoms to attract and bind in new compounds. Atoms bond to fill their outer valence shell."
            },
            {
              "front": {
                "title": "Forces in Bonding",
                "question": "What forces act between atoms in a bond?"
              },
              "back": "Attractive forces between nuclei and electrons; repulsive forces between like-charged electrons and nuclei.  The balance of these forces determines bond energy."
            },
            {
              "front": {
                "title": "Lewis Diagrams",
                "question": "What are Lewis diagrams?"
              },
              "back": "Representations of molecular structure using dots or crosses for valence electrons around a central atom."
            },
            {
              "front": {
                "title": "Covalent Bond",
                "question": "What is a covalent bond?"
              },
              "back": "A bond where pairs of electrons are shared between two atoms. Single, double, and triple bonds exist depending on the number of shared electron pairs."
            },
            {
              "front": {
                "title": "Dative Covalent Bond",
                "question": "What is a dative covalent bond?"
              },
              "back": "A covalent bond where both shared electrons come from the same atom. Examples: hydronium (H₃O⁺) and ammonium (NH₄⁺) ions."
            },
            {
              "front": {
                "title": "VSEPR Theory",
                "question": "What does VSEPR theory predict?"
              },
              "back": "Predicts the shape of molecules by minimizing electron-pair repulsion around the central atom."
            },
            {
              "front": {
                "title": "Electronegativity",
                "question": "What is electronegativity?"
              },
              "back": "An atom's power to attract electrons towards itself in a chemical bond."
            },
            {
              "front": {
                "title": "Polar vs. Non-polar Covalent Bonds",
                "question": "What's the difference between polar and non-polar covalent bonds?"
              },
              "back": "Polar bonds are between non-identical atoms (different electronegativity); non-polar bonds are between identical atoms or atoms with the same electronegativity."
            },
            {
              "front": {
                "title": "Polar vs. Non-polar Molecules",
                "question": "What is the difference between polar and non-polar molecules?"
              },
              "back": "Polar molecules have uneven charge distribution; non-polar molecules have even charge distribution or symmetrical polar bonds."
            },
            {
              "front": {
                "title": "Bond Length and Energy",
                "question": "Define bond length and bond energy."
              },
              "back": "Bond length: distance between nuclei of bonded atoms. Bond energy: energy needed to break a bond."
            },
            {
              "front": {
                "title": "Bond Strength",
                "question": "What factors affect bond strength?"
              },
              "back": "Bond length, atom size, and number of bonds between atoms."
            }
          ]
        },
        "content": "\n## Chemical Bonding and Molecular Structure\n\nChemical bonding is the physical process responsible for the attraction and binding of atoms to form new compounds.  Noble gases, with their full valence shells, serve as a reference point; other atoms bond to achieve a similar stable electron configuration.\n\nThree main forces are at play: attraction between the positive nucleus of one atom and the negative electrons of another, and repulsion between like-charged electrons and like-charged nuclei.  The balance between these attractive and repulsive forces determines the overall energy of the system; the minimum energy state corresponds to a stable bond.\n\nLewis diagrams are a useful tool for visualizing molecular structure.  These diagrams represent valence electrons as dots or crosses surrounding the central atom.\n\nCovalent bonds involve the sharing of electron pairs between atoms.  Single, double, and triple bonds represent the sharing of one, two, and three electron pairs, respectively.\n\nA dative covalent bond (or coordinate bond) is a special type of covalent bond where both shared electrons originate from the same atom.  Examples include the hydronium ion (H₃O⁺) and the ammonium ion (NH₄⁺).\n\nThe shapes of molecules can be predicted using the Valence Shell Electron Pair Repulsion (VSEPR) theory.  This theory minimizes electron-pair repulsion around the central atom to determine the most stable molecular geometry.\n\nElectronegativity is a measure of an atom's ability to attract electrons towards itself in a chemical bond.  This property explains the difference between polar and non-polar covalent bonds. Polar covalent bonds form between atoms with differing electronegativities, resulting in an uneven distribution of charge. Non-polar covalent bonds occur between identical atoms or atoms with very similar electronegativities.\n\nPolar molecules possess a slightly positive end and a slightly negative end due to uneven charge distribution.  Examples include water (H₂O), ammonia (NH₃), and hydrogen chloride (HCl). Non-polar molecules have an even charge distribution, often due to molecular symmetry.\n\nBond length is the distance between the nuclei of two bonded atoms. Bond energy is the amount of energy required to break a bond. Bond strength depends on bond length, atom size, and the number of bonds between the atoms.\n"
      },
      {
        "data": {
          "Title": "Intermolecular Forces and Their Effects",
          "icon": "🧪",
          "flashcards": [
            {
              "front": {
                "title": "Intermolecular Forces",
                "question": "What are intermolecular forces?"
              },
              "back": "Forces of attraction between molecules.  Their strength influences a substance's properties."
            },
            {
              "front": {
                "title": "Polar Molecules",
                "question": "What characterizes a polar molecule?"
              },
              "back": "Unequal distribution of charge; one part is slightly positive, the other slightly negative (a dipole)."
            },
            {
              "front": {
                "title": "Non-polar Molecules",
                "question": "What characterizes a non-polar molecule?"
              },
              "back": "Equal distribution of charge."
            },
            {
              "front": {
                "title": "Types of Intermolecular Forces",
                "question": "List the five main types of intermolecular forces."
              },
              "back": "Ion-dipole, ion-induced dipole, dipole-dipole, dipole-induced dipole, induced dipole (London dispersion)."
            },
            {
              "front": {
                "title": "Ion-Dipole Forces",
                "question": "Describe ion-dipole forces."
              },
              "back": "Attraction between an ion and a polar molecule."
            },
            {
              "front": {
                "title": "Ion-Induced Dipole Forces",
                "question": "Describe ion-induced dipole forces."
              },
              "back": "An ion induces a temporary dipole in a non-polar molecule."
            },
            {
              "front": {
                "title": "Dipole-Dipole Forces",
                "question": "Describe dipole-dipole forces."
              },
              "back": "Attraction between two polar molecules."
            },
            {
              "front": {
                "title": "Dipole-Induced Dipole Forces",
                "question": "Describe dipole-induced dipole forces."
              },
              "back": "A polar molecule induces a temporary dipole in a non-polar molecule."
            },
            {
              "front": {
                "title": "Induced Dipole Forces (London Dispersion Forces)",
                "question": "Describe induced dipole forces."
              },
              "back": "Temporary dipoles induced in non-polar molecules due to fluctuating electron distribution."
            },
            {
              "front": {
                "title": "Van der Waals Forces",
                "question": "What are van der Waals forces?"
              },
              "back": "A collective term for dipole-dipole, dipole-induced dipole, and induced dipole forces."
            },
            {
              "front": {
                "title": "Hydrogen Bonds",
                "question": "Describe hydrogen bonds."
              },
              "back": "A strong type of dipole-dipole force involving hydrogen bonded to a highly electronegative atom (O, F, N)."
            },
            {
              "front": {
                "title": "Intermolecular Forces and Properties",
                "question": "How do intermolecular forces affect the properties of substances?"
              },
              "back": "Stronger intermolecular forces lead to higher melting/boiling points, higher viscosity, higher density, and lower thermal expansion."
            },
            {
              "front": {
                "title": "Water's Properties",
                "question": "What unique properties does water possess due to its strong hydrogen bonds?"
              },
              "back": "High specific heat, infrared radiation absorption, wide liquid range, high heat of vaporization, less dense solid phase."
            },
            {
              "front": {
                "title": "Specific Heat",
                "question": "What is specific heat?"
              },
              "back": "The amount of heat needed to raise the temperature of a unit mass by one degree."
            },
            {
              "front": {
                "title": "Heat of Vaporization",
                "question": "What is heat of vaporization?"
              },
              "back": "The energy needed to change a given quantity of a substance into a gas."
            }
          ]
        },
        "content": "\n## Intermolecular Forces and Their Effects\n\n### Intermolecular Forces\n\nIntermolecular forces are the attractive forces between molecules. The type and strength of these forces significantly impact a substance's physical properties like melting point, boiling point, viscosity, and density.\n\n### Types of Intermolecular Forces\n\nThere are several types of intermolecular forces:\n\n*   **Ion-dipole forces:** Attractions between ions and polar molecules.\n*   **Ion-induced dipole forces:** An ion induces a temporary dipole in a non-polar molecule.\n*   **Dipole-dipole forces:** Attractions between two polar molecules.\n*   **Dipole-induced dipole forces:** A polar molecule induces a temporary dipole in a non-polar molecule.\n*   **Induced dipole forces (London Dispersion Forces):** Weak attractions due to temporary, fluctuating electron distributions in non-polar molecules.  These are present in all molecules, but are the only intermolecular force in non-polar molecules.\n*   **Hydrogen bonds:** A special type of dipole-dipole force; exceptionally strong attractions between molecules containing hydrogen bonded to highly electronegative atoms (oxygen, fluorine, or nitrogen).\n\n**Van der Waals forces** is a general term encompassing dipole-dipole, dipole-induced dipole, and induced dipole forces.\n\n### Effects of Intermolecular Forces on Properties\n\nThe strength of intermolecular forces influences several physical properties:\n\n*   **Melting and Boiling Points:** Stronger forces lead to higher melting and boiling points.\n*   **Viscosity:**  Stronger forces result in higher viscosity (resistance to flow).\n*   **Density:** Stronger forces generally lead to higher density (more molecules packed into a given volume).\n*   **Thermal Expansion:** Substances with weaker intermolecular forces tend to exhibit greater thermal expansion.\n*   **Thermal Conductivity:**  The ability to conduct heat can be influenced by the strength and type of intermolecular forces.\n\n### Water: A Unique Case\n\nWater's strong hydrogen bonds give it unusual properties:\n\n*   High specific heat (requires a lot of energy to change temperature)\n*   High heat of vaporization (requires a lot of energy to evaporate)\n*   Relatively high boiling point\n*   Less dense as a solid (ice floats)\n*   Excellent solvent for polar substances\n\n### Definitions\n\n*   **Specific heat:** The amount of heat required to raise the temperature of 1 gram of a substance by 1 degree Celsius.\n*   **Heat of vaporization:** The amount of heat required to convert 1 gram of a liquid to a gas at its boiling point.\n\n\n"
      },
      {
        "data": {
          "Title": "Geometrical Optics",
          "icon": "💡",
          "flashcards": [
            {
              "front": {
                "title": "Reflection and the Law of Reflection",
                "question": "Describe the law of reflection."
              },
              "back": "The angle of incidence equals the angle of reflection.  These angles are measured relative to the normal (a line perpendicular to the reflecting surface)."
            },
            {
              "front": {
                "title": "Speed of Light",
                "question": "Where does light travel fastest?"
              },
              "back": "Light travels fastest in a vacuum. It travels slower in other media."
            },
            {
              "front": {
                "title": "Refraction and Refractive Index",
                "question": "What is refraction, and what influences it?"
              },
              "back": "Refraction is the bending of light as it passes from one medium to another. The refractive index of a medium determines the degree of bending.  A higher refractive index indicates greater bending."
            },
            {
              "front": {
                "title": "Sketching Ray Diagrams",
                "question": "How do ray diagrams depict light's path through different media?"
              },
              "back": "Ray diagrams use lines to show the path of light. The bending of these lines at the interface between media illustrates refraction, with the degree of bending determined by the refractive indices."
            },
            {
              "front": {
                "title": "Snell's Law",
                "question": "State Snell's Law and explain its use."
              },
              "back": "Snell's Law:  ```math\n n₁sinθ₁ = n₂sinθ₂ ```\nwhere n₁ and n₂ are the refractive indices of the two media, and θ₁ and θ₂ are the angles of incidence and refraction, respectively.  It allows calculation of the angle of refraction or the refractive index of a medium."
            },
            {
              "front": {
                "title": "Total Internal Reflection",
                "question": "What conditions are necessary for total internal reflection?"
              },
              "back": "Total internal reflection occurs when light travels from a denser medium to a less dense medium, and the angle of incidence exceeds the critical angle.  No light is refracted; all light is reflected back into the denser medium."
            }
          ]
        },
        "content": "\n## Geometrical Optics\n\nThis chapter introduces geometrical optics, building upon prior knowledge of reflection and the law of reflection.  We will explore the concept of a light ray, the speed of light in different media, and how to sketch ray diagrams.  We will also cover Snell's law and the phenomenon of total internal reflection.\n\n\n### Key Concepts\n\n*   **Reflection and the Law of Reflection:** A light ray is an imaginary line representing the path of light. The law of reflection states that the angle of incidence equals the angle of reflection, measured from the normal to the surface.\n\n*   **The Speed of Light:** Light travels fastest in a vacuum. Its speed is reduced when passing through other media. This change in speed causes refraction.\n\n*   **Refraction and Refractive Index:** Refraction is the bending of light as it passes from one medium to another. The refractive index of a medium quantifies how much light bends when entering that medium.  A higher refractive index indicates a greater degree of bending.\n\n*   **Sketching Ray Diagrams:** Ray diagrams illustrate the path of light through different media, showing how light bends depending on the refractive indices of the media involved.\n\n*   **Snell's Law:** Snell's Law precisely describes the relationship between the angles of incidence and refraction, and the refractive indices of the two media:\n\n```math\n      n₁ sinθ₁\n  =  ────────\n      n₂ sinθ₂ \n```\n\n*   **Total Internal Reflection:** When light travels from a denser to a less dense medium and the angle of incidence exceeds the critical angle, total internal reflection occurs. All light is reflected back into the denser medium.  This phenomenon has applications in various fields, including communications and medicine.\n"
      },
      {
        "data": {
          "Title": "Geometrical Optics",
          "icon": "💡",
          "flashcards": [
            {
              "front": {
                "title": "Law of Reflection",
                "question": "What is the relationship between the angle of incidence and the angle of reflection?"
              },
              "back": "The angle of incidence (θᵢ) equals the angle of reflection (θᵣ).  The incident ray, reflected ray, and normal all lie in the same plane."
            },
            {
              "front": {
                "title": "Refractive Index",
                "question": "Define refractive index and provide its formula."
              },
              "back": "The refractive index (n) is the ratio of the speed of light in a vacuum (c) to its speed in a material (v).  Formula:  `n = c/v`"
            },
            {
              "front": {
                "title": "Snell's Law",
                "question": "State Snell's Law and explain what it describes."
              },
              "back": "Snell's Law describes the relationship between refractive indices and angles in refraction: `n₁ sin θ₁ = n₂ sin θ₂` where n₁ and n₂ are the refractive indices of the two media, and θ₁ and θ₂ are the angles of incidence and refraction respectively."
            },
            {
              "front": {
                "title": "Critical Angle",
                "question": "What is the critical angle, and what phenomenon does it relate to?"
              },
              "back": "The critical angle is the angle of incidence at which the angle of refraction is 90°. It's the angle at which total internal reflection begins."
            },
            {
              "front": {
                "title": "Total Internal Reflection",
                "question": "When does total internal reflection occur?"
              },
              "back": "Total internal reflection occurs when light travels from a denser medium to a less dense medium, and the angle of incidence is greater than the critical angle.  No light is refracted; all light is reflected internally."
            }
          ]
        },
        "content": "\n## Geometrical Optics\n\n### Light Rays and Reflection\n\nLight rays are lines perpendicular to light wavefronts. In geometrical optics, we represent them as straight arrows.  Light rays reflect off surfaces. The incident ray strikes the surface, and the reflected ray bounces off. The normal is a line perpendicular to the surface at the point of incidence. The angle of incidence (θᵢ) is the angle between the incident ray and the normal; the angle of reflection (θᵣ) is the angle between the reflected ray and the normal.\n\nThe **Law of Reflection** states: θᵢ = θᵣ, and the incident ray, reflected ray, and normal lie in the same plane.\n\nLight can also be absorbed and transmitted. The speed of light (c) is constant in a given medium, with a maximum speed in a vacuum of 3 × 10⁸ m·s⁻¹.\n\n\n### Refraction\n\nRefraction occurs when light passes from one medium to another, changing speed but maintaining its frequency.  If the light hits the boundary at an angle (other than perpendicular or parallel), it changes direction (bends).\n\nThe **refractive index** (n) of a material indicates how difficult it is for light to pass through:\n\n```math\n      c\n n =  ─────\n      v\n```\n\nwhere *c* is the speed of light in a vacuum and *v* is the speed of light in the material.  Optical density measures a medium's refracting power. The normal is perpendicular to the surface. The angle of incidence is between the normal and the incident ray; the angle of refraction is between the normal and the refracted ray.\n\n**Snell's Law** describes refraction:\n\n```math\n n₁ sin θ₁ = n₂ sin θ₂\n```\n\nLight bends towards the normal when moving into a denser medium and away from the normal when moving into a less dense medium.\n\n\n### Critical Angle and Total Internal Reflection\n\nThe **critical angle** is the angle of incidence where the angle of refraction is 90°.  **Total internal reflection** happens when light travels from a denser to a less dense medium and the angle of incidence exceeds the critical angle. All light is reflected back into the denser medium; no refraction occurs.  This is used in optical fibers and endoscopes.\n"
      },
      {
        "data": {
          "Title": "Wavefronts, Huygens' Principle, and Diffraction",
          "icon": "🌊",
          "flashcards": [
            {
              "front": {
                "title": "Wavefront",
                "question": "What is a wavefront?"
              },
              "back": "An imaginary line connecting points on a wave that are in phase."
            },
            {
              "front": {
                "title": "Huygens' Principle",
                "question": "State Huygens' Principle."
              },
              "back": "Every point on a wavefront acts as a source of secondary spherical wavelets.  The new wavefront is the surface tangent to these wavelets."
            },
            {
              "front": {
                "title": "Diffraction",
                "question": "What is diffraction?"
              },
              "back": "The bending of waves as they pass through an aperture or around an obstacle."
            },
            {
              "front": {
                "title": "Diffraction and Wavelength/Slit Width",
                "question": "How does the degree of diffraction relate to wavelength and slit width?"
              },
              "back": "Diffraction is proportional to the ratio of wavelength (λ) to slit width (w):  Diffraction ∝ λ/w"
            }
          ]
        },
        "content": "\n## Wavefronts, Huygens' Principle, and Diffraction\n\n### Wavefronts\n\nA wavefront is an imaginary line connecting points on a wave that are in phase.  This means the points are at the same stage of their oscillation (e.g., all at their crests or all at their troughs).\n\n### Huygens' Principle\n\nHuygens' Principle describes how wavefronts propagate.  It states that every point on a wavefront can be considered as a source of secondary spherical wavelets.  The new position of the wavefront after a time interval is the surface that is tangent to all of these secondary wavelets.\n\n### Diffraction\n\nDiffraction is the phenomenon where waves spread out as they pass through an aperture (opening) or around obstacles.  The amount of bending or spreading depends on the size of the aperture or obstacle relative to the wavelength of the wave.\n\n### Diffraction and Wavelength/Slit Width\n\nThe degree of diffraction is directly proportional to the wavelength (λ) of the wave and inversely proportional to the width (w) of the slit or aperture. This relationship can be expressed as:\n\n```math\nDiffraction ∝ λ\n─────────────\n       w\n```\n\nIn simpler terms:  Longer wavelengths diffract more, and narrower slits cause more diffraction.\n"
      },
      {
        "data": {
          "Title": "Kinetic Theory of Gases and Gas Laws",
          "icon": "💨",
          "flashcards": [
            {
              "front": {
                "title": "Kinetic Theory of Gases",
                "question": "What are the main tenets of the Kinetic Theory of Gases?"
              },
              "back": "Gases are composed of constantly moving particles with negligible volume and intermolecular forces.  Pressure results from particle collisions, and temperature reflects average kinetic energy."
            },
            {
              "front": {
                "title": "Ideal Gas",
                "question": "What defines an ideal gas?"
              },
              "back": "An ideal gas consists of identical particles with zero volume and no intermolecular forces.  Particles move at the same speed."
            },
            {
              "front": {
                "title": "Real Gas",
                "question": "How do real gases deviate from ideal gas behavior?"
              },
              "back": "Real gases deviate from ideal behavior at high pressures (particle volume becomes significant) and low temperatures (intermolecular forces become significant)."
            },
            {
              "front": {
                "title": "Boyle's Law",
                "question": "State Boyle's Law and write the formula."
              },
              "back": "At constant temperature, the pressure of a fixed amount of gas is inversely proportional to its volume.  `p₁V₁ = p₂V₂`"
            },
            {
              "front": {
                "title": "Charles' Law",
                "question": "State Charles' Law and write the formula."
              },
              "back": "At constant pressure, the volume of a fixed amount of gas is directly proportional to its Kelvin temperature. `V₁/T₁ = V₂/T₂`"
            },
            {
              "front": {
                "title": "Pressure-Temperature Relationship",
                "question": "Describe the relationship between pressure and temperature for a fixed volume of gas."
              },
              "back": "At constant volume, the pressure of a fixed amount of gas is directly proportional to its Kelvin temperature. `p₁/T₁ = p₂/T₂`"
            },
            {
              "front": {
                "title": "Kelvin Temperature Conversion",
                "question": "How do you convert Celsius to Kelvin?"
              },
              "back": "T<sub>K</sub> = T<sub>C</sub> + 273"
            },
            {
              "front": {
                "title": "General Gas Equation",
                "question": "State the general gas equation."
              },
              "back": "`p₁V₁/T₁ = p₂V₂/T₂`"
            },
            {
              "front": {
                "title": "Avogadro's Law",
                "question": "State Avogadro's Law."
              },
              "back": "Equal volumes of gases at the same temperature and pressure contain the same number of molecules."
            },
            {
              "front": {
                "title": "Ideal Gas Equation",
                "question": "State the ideal gas equation and define each variable."
              },
              "back": "pV = nRT, where p = pressure, V = volume, n = number of moles, R = universal gas constant, T = Kelvin temperature."
            },
            {
              "front": {
                "title": "Universal Gas Constant (R)",
                "question": "What is the value of the universal gas constant (R) and its units?"
              },
              "back": "R = 8.314 J·K⁻¹·mol⁻¹"
            }
          ]
        },
        "content": "\n## Kinetic Theory of Gases and Gas Laws\n\nThe kinetic theory of gases explains gas behavior.  Gases are composed of particles in constant motion, with negligible volume and intermolecular forces. Pressure arises from particle collisions, and temperature reflects the average kinetic energy.\n\n### Ideal and Real Gases\n\nAn **ideal gas** is a theoretical model where particles have zero volume and no intermolecular forces.  Real gases deviate from this ideal behavior, particularly at high pressures (particle volume becomes significant) and low temperatures (intermolecular forces become important).\n\n### Gas Laws\n\nSeveral laws describe the relationships between pressure (p), volume (V), temperature (T), and amount (n) of a gas:\n\n* **Boyle's Law:**  At constant temperature,  `p₁V₁ = p₂V₂` (pressure and volume are inversely proportional).\n\n* **Charles' Law:** At constant pressure, `V₁/T₁ = V₂/T₂` (volume and Kelvin temperature are directly proportional).\n\n* **Pressure-Temperature Relationship:** At constant volume, `p₁/T₁ = p₂/T₂` (pressure and Kelvin temperature are directly proportional).\n\nTo use Charles' Law and the pressure-temperature relationship, temperature must be in Kelvin (K):  T<sub>K</sub> = T<sub>C</sub> + 273.\n\n* **General Gas Equation:** Combining Boyle's Law and the pressure-temperature relationship, `p₁V₁/T₁ = p₂V₂/T₂`.\n\n* **Avogadro's Law:** Equal volumes of gases at the same temperature and pressure contain the same number of molecules.\n\n* **Ideal Gas Equation:**  Extending these concepts to include the amount of gas (n), the ideal gas equation is `pV = nRT`, where R is the universal gas constant (R = 8.314 J·K⁻¹·mol⁻¹).  SI units (m³ for volume, Pa for pressure, K for temperature) must be used.\n\n\n### Units in the Ideal Gas Equation\n\n| Quantity | Unit Name  | Unit Symbol |\n|---|---|---|\n| Moles (n) | moles      | mol         |\n| Pressure (p) | pascals    | Pa          |\n| Temperature (T) | kelvin     | K           |\n| Volume (V) | meters cubed | m³          |\n\n\n"
      },
      {
        "data": {
          "Title": "Quantitative Aspects of Chemical Change",
          "icon": "🧪",
          "flashcards": [
            {
              "front": {
                "title": "Molar Volume of Gas at STP",
                "question": "What is the volume occupied by one mole of any gas at Standard Temperature and Pressure (STP)?"
              },
              "back": "22.4 dm³"
            },
            {
              "front": {
                "title": "Volume of Gas at STP",
                "question": "How do you calculate the volume of 'n' moles of gas at STP?"
              },
              "back": "V<sub>g</sub> = 22.4n<sub>g</sub>, where V<sub>g</sub> is the volume in dm³ and n<sub>g</sub> is the number of moles."
            },
            {
              "front": {
                "title": "Volume Relationship in Gas Reactions",
                "question": "What is the formula describing the volume relationship between two gases (A and B) in a reaction?"
              },
              "back": "V<sub>A</sub> = (a/b)V<sub>B</sub>, where V<sub>A</sub> and V<sub>B</sub> are the volumes of gases A and B, and 'a' and 'b' are their stoichiometric coefficients."
            },
            {
              "front": {
                "title": "Concentration of a Solution",
                "question": "How is the concentration (c) of a solution calculated?"
              },
              "back": "c = n/V, where c is the concentration in mol·dm⁻³, n is the number of moles of solute, and V is the volume of the solution in dm³."
            },
            {
              "front": {
                "title": "Standard Solution",
                "question": "What is a standard solution?"
              },
              "back": "A solution with a precisely known concentration."
            },
            {
              "front": {
                "title": "Titration Calculation",
                "question": "What formula relates the concentrations and volumes of two solutions in a titration?"
              },
              "back": "```math\n(c<sub>A</sub>V<sub>A</sub>)/a = (c<sub>B</sub>V<sub>B</sub>)/b\n```\nwhere c<sub>A</sub> and c<sub>B</sub> are the concentrations, V<sub>A</sub> and V<sub>B</sub> are the volumes, and a and b are the stoichiometric coefficients of reactants A and B."
            },
            {
              "front": {
                "title": "Limiting Reagent",
                "question": "What is a limiting reagent?"
              },
              "back": "The reactant that is completely consumed in a chemical reaction, limiting the amount of product formed."
            },
            {
              "front": {
                "title": "Excess Reagent",
                "question": "What is an excess reagent?"
              },
              "back": "The reactant that is not completely consumed in a chemical reaction."
            },
            {
              "front": {
                "title": "Percent Yield",
                "question": "How is percent yield calculated?"
              },
              "back": "```math\n% yield = (actual yield / theoretical yield) * 100\n```"
            },
            {
              "front": {
                "title": "Empirical Formula",
                "question": "What is an empirical formula?"
              },
              "back": "The simplest whole-number ratio of atoms in a compound."
            },
            {
              "front": {
                "title": "Molecular Formula",
                "question": "What is a molecular formula?"
              },
              "back": "The actual number of atoms of each element in a molecule of a compound."
            },
            {
              "front": {
                "title": "Percent Purity",
                "question": "How is percent purity calculated?"
              },
              "back": "```math\n% purity = (mass of compound / mass of sample) * 100\n```"
            }
          ]
        },
        "content": "\n## Quantitative Aspects of Chemical Change\n\nThis section covers calculations involving chemical reactions and solutions.\n\n### Molar Volume and Gas Laws\n\nAt Standard Temperature and Pressure (STP), one mole of any gas occupies a volume of 22.4 dm³.  This allows us to calculate the volume of any number of moles of gas at STP using the formula:\n\n```math\nV<sub>g</sub> = 22.4n<sub>g</sub>\n```\n\nwhere V<sub>g</sub> is the volume in dm³ and n<sub>g</sub> is the number of moles.\n\nThe volume relationship between two gases (A and B) in a reaction is given by:\n\n```math\n      a\nV<sub>A</sub> = ― V<sub>B</sub>\n      b\n```\n\nwhere V<sub>A</sub> and V<sub>B</sub> are the volumes of gases A and B, and *a* and *b* are their stoichiometric coefficients.\n\n\n### Solution Concentration and Titrations\n\nThe concentration (c) of a solution is calculated as:\n\n```math\n      n\nc =  ─────\n      V\n```\n\nwhere *c* is the concentration in mol·dm⁻³, *n* is the number of moles of solute, and *V* is the volume of the solution in dm³.\n\nA standard solution has a precisely known concentration.  Titration is a technique to determine the unknown concentration of a solution. The following formula can be used:\n\n\n```math\n(c<sub>A</sub>V<sub>A</sub>)/a = (c<sub>B</sub>V<sub>B</sub>)/b\n```\n\nwhere c<sub>A</sub> and c<sub>B</sub> are the concentrations, V<sub>A</sub> and V<sub>B</sub> are the volumes, and *a* and *b* are the stoichiometric coefficients of reactants A and B.\n\n### Limiting and Excess Reagents, and Yield\n\nA limiting reagent is completely consumed in a reaction, limiting the amount of product. An excess reagent is not fully consumed.\n\nPercent yield is calculated as:\n\n```math\n% yield = (actual yield / theoretical yield) * 100\n```\n\n### Empirical and Molecular Formulas, and Purity\n\nThe empirical formula shows the simplest whole-number ratio of atoms in a compound.  The molecular formula shows the actual number of atoms of each element in a molecule.\n\nPercent purity is calculated as:\n\n```math\n% purity = (mass of compound / mass of sample) * 100\n```\n\n### Units Used in Calculations\n\n| Quantity      | Unit Name                | Unit Symbol |\n|---------------|--------------------------|-------------|\n| Concentration (c) | moles per cubic decimetre | mol·dm⁻³     |\n| Mass (m)       | kilogram                 | kg          |\n| Moles (n)      | moles                    | mol         |\n| Volume (V)     | cubic decimetres         | dm³         |\n\n\n"
      },
      {
        "data": {
          "Title": "Electrostatics Fundamentals",
          "icon": "⚡️",
          "flashcards": [
            {
              "front": {
                "title": "Electric Charge",
                "question": "What are the three types of electric charge?"
              },
              "back": "Objects can be positively charged, negatively charged, or neutral."
            },
            {
              "front": {
                "title": "Coulomb's Law",
                "question": "State Coulomb's Law."
              },
              "back": "The magnitude of the electrostatic force between two point charges is directly proportional to the product of the magnitudes of the charges and inversely proportional to the square of the distance between them.  ```math\nF = \\frac{kQ_1Q_2}{r^2}\n```"
            },
            {
              "front": {
                "title": "Electric Field",
                "question": "What is an electric field?"
              },
              "back": "A region of space where an electric charge experiences a force. The direction of the field at a point is the direction a positive test charge would move if placed at that point."
            },
            {
              "front": {
                "title": "Electric Field Lines",
                "question": "How are electric field lines represented?"
              },
              "back": "Electric field lines point away from positive charges and towards negative charges.  This illustrates that like charges repel and unlike charges attract."
            },
            {
              "front": {
                "title": "Electric Field Strength",
                "question": "Define electric field strength (E)."
              },
              "back": "Electric field strength (E) is the force per unit charge: ```math\nE = \\frac{F}{q}\n```  The units are N·C⁻¹."
            },
            {
              "front": {
                "title": "Electric Field due to a Point Charge",
                "question": "What is the formula for the electric field due to a point charge Q?"
              },
              "back": "```math\nE = \\frac{F}{q} = \\frac{kQ}{r^2}\n```"
            },
            {
              "front": {
                "title": "Electrostatic Force",
                "question": "Describe the nature of the electrostatic force."
              },
              "back": "The electrostatic force is attractive between unlike charges and repulsive between like charges."
            }
          ]
        },
        "content": "\n## Electrostatics Fundamentals\n\n### Electric Charge\n\nObjects can be positively charged, negatively charged, or neutral.\n\n### Coulomb's Law\n\nCoulomb's Law describes the electrostatic force between two point charges:\n\n```math\n    k Q₁ × Q₂  \nF = ───────  \n        r²    \n```\n\nwhere:\n\n*   F is the electrostatic force\n*   k is Coulomb's constant\n*   Q₁ and Q₂ are the magnitudes of the charges\n*   r is the distance between the charges\n\n### Electric Field\n\nAn electric field is a region of space where an electric charge experiences a force.  The direction of the field at a point is the direction a positive test charge would move if placed at that point.\n\n### Electric Field Lines\n\nElectric field lines are a visual representation of the electric field.  They point away from positive charges and towards negative charges, illustrating that like charges repel and unlike charges attract.\n\n### Electric Field Strength\n\nThe electric field strength (E) is defined as the force per unit charge:\n\n```math\n      F\nE = ────\n      Q\n```\n\nThe units of electric field strength are Newtons per Coulomb (N·C⁻¹).\n\n### Electric Field due to a Point Charge\n\nThe electric field strength (E) at a distance r from a point charge Q is:\n\n```math\n      F          kQ  \nE = ────  =  ───── \n      q           r²\n\n```\n\n### Electrostatic Force\n\nThe electrostatic force is attractive for unlike charges (positive and negative) and repulsive for like charges (positive and positive, or negative and negative).\n\n\n### Physical Quantities\n\n| Quantity        | Unit Name    | Unit Symbol |\n|-----------------|---------------|-------------|\n| Charge (q)      | Coulomb       | C           |\n| Distance (r)    | meter         | m           |\n| Electric Field (E) | Newtons per Coulomb | N·C⁻¹       |\n| Force (F)       | Newton        | N           |\n\n\n"
      }
    ],
    "2": [
      {
        "data": {
          "Title": "Definitions",
          "icon": "📔",
          "flashcards": [
            {
              "front": {
                "title": "Medicines",
                "question": "How is a medicine defined in terms of its purpose and claims?"
              },
              "back": "Any substance or mixture of substances used, manufactured, sold, or represented as suitable for diagnosing, treating, mitigating, or preventing disease, or modifying any physical, mental, or organic function in humans or animals. It includes substances that claim medicinal effects even without making explicit claims."
            },
            {
              "front": {
                "title": "Advertisement",
                "question": "What qualifies as an advertisement for a medicine?"
              },
              "back": "Any written, pictorial, visual, verbal, or descriptive material that appears in publications, TV, cinema, or is distributed to the public in any way to promote the sale of the medicine."
            },
            {
              "front": {
                "title": "Clinical Trial",
                "question": "What is a clinical trial and what does it involve?"
              },
              "back": "A systematic study in humans or animals to establish the efficacy of medicines, verify effects or adverse reactions, and study absorption, distribution, metabolism, and excretion."
            },
            {
              "front": {
                "title": "Sell",
                "question": "What actions are included in the definition of 'sell'?"
              },
              "back": "Includes wholesale, retail, import, export, advertise, label, prepare, expose, possess for sale, smuggle, administer, hawk, supply, barter, deliver, transmit as gift or sample, or dispose of in any way."
            },
            {
              "front": {
                "title": "Possess",
                "question": "What does 'possess' mean in the legal context of medicines?"
              },
              "back": "To keep, store, or have in custody, control, or supervision. Liability may extend to individuals responsible for those flouting the law under their control."
            },
            {
              "front": {
                "title": "Deal In",
                "question": "What does 'deal in' prohibited drugs involve?"
              },
              "back": "Selling or performing any act (as principal, agent, messenger, etc.) related to delivery, collection, import/export, administration, manufacture, or transmission of a prohibited drug."
            },
            {
              "front": {
                "title": "Manufacture",
                "question": "What is considered 'manufacture' of medicine, and who is allowed to compound?"
              },
              "back": "Includes compounding, processing, or packing for sale. Excludes compounding by a licensed practitioner or pharmacist for a specific patient or for sale from the premises. MCAZ approval is required for general sale. Prohibited substances cannot be compounded."
            },
            {
              "front": {
                "title": "Dispense",
                "question": "What does it mean to 'dispense' a medicine?"
              },
              "back": "To prepare, measure, mix, dissolve, or count out a drug for the treatment of a specific person or animal. Does not include the actual administration of the drug."
            },
            {
              "front": {
                "title": "Prescription",
                "question": "What is a prescription and who is it intended for?"
              },
              "back": "An order made by a prescriber, written or verbal, for supplying a medicine to a specific person or animal. It must not be made out to groups like families or clinics. Dangerous Drugs prescriptions must be handwritten."
            },
            {
              "front": {
                "title": "Prescriber",
                "question": "Who is legally allowed to prescribe medicine?"
              },
              "back": "Only medical, dental, and veterinary practitioners. Pharmacists and nurses cannot prescribe but may supply certain medicines as permitted by law."
            },
            {
              "front": {
                "title": "Dangerous Drugs Register",
                "question": "What are the requirements for a Dangerous Drugs Register?"
              },
              "back": "Must be a bound book, not loose-leaf or card index. Records must comply with Sections 9, 28, and 33 of the Dangerous Drugs Regulations."
            },
            {
              "front": {
                "title": "Continuous and Personal Supervision",
                "question": "What is required under continuous and personal supervision?"
              },
              "back": "All regulated activities must occur under the presence and active supervision of a person with a valid Persons Licence issued by MCAZ, who is authorized to dispense medicines."
            }
          ]
        },
        "content": "\n# General Evolution Of The Regulatory System\n\n## THE CHLOROFORM CASE\n\n> In the UK the use of chloroform as an anesthetic had been suspected of Adverse Reactions  (Depression of respiration, cardiac arrest and sudden death)  \n\nAfter a study and a Committee report in 1914 recommendations were made that there should be more controls on advertising and sale of medicines. \n\nIt was also recommended that \n- A register of manufacturers be established\n- The name of the manufacturer was to be stated on the product label\n- Ingredients and therapeutic claims had been declared on the label\n- Manufacturing sites for medicines were to be inspected \n\n## Control of Medicines\n\nThis is through Acts of Parliament which empower Ministers and their Departments to introduce rules and regulations (the nuts and bolts of legislation)\n\nThese are commonly known as Statutory Instruments.\n\n## Zimbabwe Context \nLegislation effectively started in in 1969 only a few years after  the United Kingdom Medicines Act.  The control of medicines in Zimbabwe is provided for under\n- The Medicines and Allied Substances Control Act (MASCA) [Chapter 15:03] (and its Regulations (Including Statutory Instruments) passed from time to time.\n(MASCA was previously known as the Drugs and Allied Substances Control Act, until 1 August 1997)\n- The Dangerous Drugs Act (Chapter 15:02) and its regulations.\n\n## Medicines and Allied Substances Control Act (MASCA)\nThis Act provides for:\n- Establishment of a medicines regulatory authority, the Medicines Control Authority of Zimbabwe\n- Registration of medicines\n- Licensing and Control of premises and persons handling medicines.\n- Control of clinical trials (in collaboration with the Medical Research Council and Department of Veterinary Services).\n- Procedure for handling prohibited drugs and \n- General provisions.\n\n## Dangerous Drugs Act (DDA) (Chapter 15:02)\nProvides for the control of: \n- Production \n- Importation \n- Exportation \n- Possession \n- Sale \n- Distribution, and \n- Use\n\nof dangerous drugs which are mostly narcotics liable to abuse.\n\n"
      }
    ],
    "3": [
      {
        "data": {
          "Title": "Meiosis",
          "icon": "🧬",
          "flashcards": [
            {
              "front": {
                "title": "Definition of Meiosis",
                "question": "What is meiosis?"
              },
              "back": "Meiosis is a type of cell division where a diploid cell divides to form four genetically different haploid cells (sex cells)."
            },
            {
              "front": {
                "title": "Purpose of Meiosis",
                "question": "What is the significance of meiosis?"
              },
              "back": "It halves the number of chromosomes (from diploid to haploid), ensuring the correct number in the zygote after fertilization, and it introduces genetic variation through crossing over."
            },
            {
              "front": {
                "title": "Meiosis I",
                "question": "What happens during Meiosis I?"
              },
              "back": "Homologous chromosomes separate, resulting in two haploid cells with duplicated chromosomes."
            },
            {
              "front": {
                "title": "Meiosis II",
                "question": "What happens during Meiosis II?"
              },
              "back": "Sister chromatids separate, forming four genetically different haploid cells."
            },
            {
              "front": {
                "title": "Crossing Over",
                "question": "What is crossing over?"
              },
              "back": "During Prophase I, chromatids of homologous chromosomes exchange segments at the chiasma, leading to genetic variation."
            },
            {
              "front": {
                "title": "Non-Disjunction",
                "question": "What is non-disjunction?"
              },
              "back": "It is the failure of chromosomes to separate properly during Anaphase I or II, which can lead to disorders like Down syndrome."
            },
            {
              "front": {
                "title": "Meiosis vs Mitosis",
                "question": "How is meiosis different from mitosis?"
              },
              "back": "Meiosis produces four haploid, genetically different cells; mitosis produces two diploid, genetically identical cells."
            }
          ]
        },
        "content": "\n## Meiosis\n\n### Chapter Summary\n\nMeiosis is a special form of cell division that produces gametes — sperm and egg cells — each with half the number of chromosomes. A diploid cell (2n) undergoes two successive divisions: Meiosis I and Meiosis II.\n\n**Key Stages:**\n\n**Meiosis I:**\n\n- *Prophase I*: Chromosomes become visible; homologous chromosomes pair and crossing over occurs at chiasmata.\n- *Metaphase I*: Homologous pairs line up at the equator.\n- *Anaphase I*: Homologous chromosomes are pulled to opposite poles.\n- *Telophase I*: Two haploid cells form, each with half the number of chromosomes.\n\n**Meiosis II:**\n\n- *Prophase II*: New spindles form in each haploid cell.\n- *Metaphase II*: Chromosomes line up individually at the equator.\n- *Anaphase II*: Sister chromatids are pulled apart.\n- *Telophase II*: Four genetically distinct haploid cells result.\n\n**Importance of Meiosis:**\n\n1. **Genetic variation** through crossing over and independent assortment.\n2. **Maintains chromosome number** across generations.\n\n**Abnormal Meiosis:**\n\nWhen chromosomes fail to separate (non-disjunction), gametes may have an abnormal number of chromosomes. If such a gamete is involved in fertilization, it may result in conditions like **Down syndrome**, where there is an extra copy of chromosome 21.\n\n---\n\n\n"
      },
      {
        "data": {
          "Title": "Evolution",
          "icon": "🧬",
          "flashcards": [
            {
              "front": {
                "title": "What is Evolution?",
                "question": "Define evolution in biological terms."
              },
              "back": "Evolution is the change in the characteristics of a species over generations through natural selection and other processes."
            },
            {
              "front": {
                "title": "Natural Selection",
                "question": "What is natural selection?"
              },
              "back": "Natural selection is the process by which organisms better adapted to their environment survive and reproduce, passing on advantageous traits."
            },
            {
              "front": {
                "title": "Variation",
                "question": "What causes variation in a population?"
              },
              "back": "Variation is caused by mutations, genetic recombination, and random fertilisation."
            },
            {
              "front": {
                "title": "Speciation",
                "question": "How does speciation occur?"
              },
              "back": "Speciation occurs when populations become reproductively isolated and evolve independently into new species."
            },
            {
              "front": {
                "title": "Evidence for Evolution",
                "question": "What evidence supports the theory of evolution?"
              },
              "back": "Fossil records, comparative anatomy, DNA similarities, and embryology all support evolution."
            }
          ]
        },
        "content": "\n## Evolution\n\n**Evolution** refers to the process by which species change over time. These changes are passed on genetically and can lead to the development of new species.\n\n### Key Concepts\n\n#### 1. **Variation**\n- Differences in traits among individuals in a population.\n- Caused by mutations, meiosis (crossing over and independent assortment), and fertilisation.\n\n#### 2. **Natural Selection**\n- Proposed by **Charles Darwin**\n- Individuals with favorable traits are more likely to survive and reproduce.\n- These traits become more common in the population over generations.\n\n#### 3. **Speciation**\n- Formation of a new species.\n- Occurs when a population becomes reproductively isolated (geographically or behaviorally) and evolves independently.\n\n### Types of Evidence for Evolution\n\n- **Fossil Record:** Shows gradual changes in species over time.\n- **Comparative Anatomy:** Similar body structures (e.g., homologous limbs) in different species suggest common ancestry.\n- **Embryology:** Similar embryonic development patterns indicate evolutionary relationships.\n- **Molecular Evidence:** Similarities in DNA and proteins.\n\n### Human Evolution\n\n- Humans share a common ancestor with other primates.\n- Fossils like *Australopithecus*, *Homo habilis*, and *Homo erectus* show the evolutionary path leading to *Homo sapiens*.\n\n---\n\n"
      },
      {
        "data": {
          "Title": "Human Impact on the Environment",
          "icon": "🌍",
          "flashcards": [
            {
              "front": {
                "title": "Biodiversity",
                "question": "What is biodiversity and why is it important?"
              },
              "back": "Biodiversity refers to the variety of life in all its forms. It ensures ecosystem stability and resilience."
            },
            {
              "front": {
                "title": "Deforestation",
                "question": "How does deforestation affect the environment?"
              },
              "back": "It leads to habitat loss, reduced biodiversity, soil erosion, and contributes to climate change."
            },
            {
              "front": {
                "title": "Greenhouse Effect",
                "question": "What causes the enhanced greenhouse effect?"
              },
              "back": "Human activities like burning fossil fuels increase greenhouse gases (CO₂, CH₄), leading to global warming."
            },
            {
              "front": {
                "title": "Eutrophication",
                "question": "What is eutrophication and what causes it?"
              },
              "back": "Excess nutrients from fertilizers enter water bodies, causing algae blooms that deplete oxygen and kill aquatic life."
            },
            {
              "front": {
                "title": "Sustainable Living",
                "question": "How can we reduce our impact on the environment?"
              },
              "back": "By conserving resources, reducing waste, recycling, and using renewable energy sources."
            }
          ]
        },
        "content": "\n## Human Impact on the Environment\n\nHuman activities have drastically changed natural ecosystems, often leading to negative consequences for biodiversity, climate, and human health.\n\n### Major Environmental Issues\n\n#### 1. **Loss of Biodiversity**\n- Caused by habitat destruction, overexploitation, invasive species, pollution, and climate change.\n- Loss of species reduces ecosystem stability and potential benefits like medicine and food.\n\n#### 2. **Deforestation**\n- Forests are cleared for agriculture, logging, and development.\n- Leads to:\n  - Soil erosion\n  - Loss of carbon sinks\n  - Reduced rainfall\n\n#### 3. **Pollution**\n- **Air pollution:** From vehicles and factories\n- **Water pollution:** Industrial waste, sewage, and agricultural runoff\n- **Land pollution:** Littering and dumping of waste\n\n#### 4. **Global Warming and Climate Change**\n- Greenhouse gases trap heat in the atmosphere.\n- Caused by CO₂ from fossil fuels and CH₄ from agriculture.\n- Leads to:\n  - Rising temperatures\n  - Melting ice caps\n  - Extreme weather events\n\n#### 5. **Eutrophication**\n- Excess fertilizers enter lakes/rivers\n- Causes algae blooms → blocks sunlight → kills aquatic life\n\n### Solutions\n\n- **Conservation:** Protecting habitats and endangered species\n- **Recycling:** Reduces landfill waste and conserves resources\n- **Sustainable practices:** Renewable energy, organic farming, reforestation\n\n---\n\n"
      },
      {
        "data": {
          "Title": "Scientific Skills",
          "icon": "📊",
          "flashcards": [
            {
              "front": {
                "title": "Scientific Method",
                "question": "What are the steps of the scientific method?"
              },
              "back": "Identify a problem, formulate a hypothesis, conduct an experiment, collect data, analyze results, and draw a conclusion."
            },
            {
              "front": {
                "title": "Controlled Variables",
                "question": "What are controlled variables?"
              },
              "back": "Controlled variables are factors kept constant to ensure a fair test in an experiment."
            },
            {
              "front": {
                "title": "Graph Interpretation",
                "question": "What should you include when drawing a graph?"
              },
              "back": "A title, labeled axes with units, appropriate scale, and a key if necessary."
            },
            {
              "front": {
                "title": "Accuracy vs Precision",
                "question": "What is the difference between accuracy and precision?"
              },
              "back": "Accuracy is how close a result is to the true value; precision is how consistently results can be repeated."
            },
            {
              "front": {
                "title": "Essay Writing in Science",
                "question": "What is the basic structure for writing a scientific essay?"
              },
              "back": "Introduction, body (with logical arguments and evidence), and conclusion."
            }
          ]
        },
        "content": "\n## Scientific Skills\n\nUnderstanding and applying scientific skills is essential for practical work, investigations, and interpreting data in Life Sciences.\n\n### The Scientific Method\n\n1. **Identify a Problem:** Ask a question based on observations.\n2. **Formulate a Hypothesis:** Predict what will happen.\n3. **Experiment:** Design a method to test the hypothesis, controlling variables.\n4. **Collect and Record Data:** Use tables or charts.\n5. **Analyze Results:** Identify patterns and trends.\n6. **Draw a Conclusion:** Accept or reject the hypothesis.\n\n### Variables in Experiments\n\n- **Independent variable:** What you change\n- **Dependent variable:** What you measure\n- **Controlled variables:** Kept constant\n\n### Drawing and Interpreting Graphs\n\nWhen drawing a graph:\n- Use correct axes (X for independent, Y for dependent)\n- Choose an appropriate scale\n- Label axes with units\n- Add a descriptive title\n\n### Accuracy, Precision & Reliability\n\n- **Accuracy:** Correctness of measurements\n- **Precision:** Consistency of repeated results\n- **Reliability:** Consistency across different conditions or repeats\n\n### Writing Scientific Essays\n\nUse this structure:\n- **Introduction:** Define key terms, state the topic\n- **Body:** Use logical arguments with scientific facts\n- **Conclusion:** Summarize key points and answer the question\n\n---\n\n"
      },
      {
        "data": {
          "Title": "Nucleic Acids",
          "icon": "🧬",
          "flashcards": [
            {
              "front": {
                "title": "What are nucleic acids?",
                "question": "What are the two types of nucleic acids found in cells?"
              },
              "back": "The two types of nucleic acids are DNA (deoxyribonucleic acid) and RNA (ribonucleic acid)."
            },
            {
              "front": {
                "title": "DNA vs RNA",
                "question": "What is the main difference between DNA and RNA?"
              },
              "back": "DNA is double-stranded and contains thymine; RNA is single-stranded and contains uracil instead of thymine."
            },
            {
              "front": {
                "title": "Structure of DNA",
                "question": "What are the building blocks of DNA?"
              },
              "back": "DNA is made up of nucleotides, which consist of a phosphate group, a deoxyribose sugar, and a nitrogenous base."
            },
            {
              "front": {
                "title": "Nitrogenous Bases",
                "question": "Which bases pair in DNA and RNA?"
              },
              "back": "In DNA: A pairs with T, and G pairs with C. In RNA: A pairs with U, and G pairs with C."
            },
            {
              "front": {
                "title": "DNA Replication",
                "question": "Why is DNA replication important?"
              },
              "back": "DNA replication ensures that each new cell has an exact copy of the DNA, preserving genetic information."
            },
            {
              "front": {
                "title": "Protein Synthesis",
                "question": "What are the two main stages of protein synthesis?"
              },
              "back": "Transcription (in the nucleus) and translation (in the cytoplasm at the ribosome)."
            },
            {
              "front": {
                "title": "mRNA and tRNA",
                "question": "What are the roles of mRNA and tRNA in protein synthesis?"
              },
              "back": "mRNA carries the genetic code from DNA to the ribosome; tRNA brings amino acids and matches codons with anticodons."
            },
            {
              "front": {
                "title": "Codons",
                "question": "What is a codon?"
              },
              "back": "A codon is a sequence of three bases on mRNA that codes for a specific amino acid."
            },
            {
              "front": {
                "title": "DNA Profiling",
                "question": "What is DNA profiling used for?"
              },
              "back": "DNA profiling is used to identify individuals in criminal cases, paternity tests, and identifying remains."
            }
          ]
        },
        "content": "\n## Nucleic Acids\n\n### Chapter Summary\n\nNucleic acids are large molecules essential for life. They store genetic information and are responsible for passing traits from one generation to the next. There are two types: **DNA** and **RNA**.\n\n---\n\n### Structure of DNA and RNA\n\nEach nucleic acid is made of building blocks called **nucleotides**, which consist of:\n- A phosphate group\n- A sugar (deoxyribose in DNA, ribose in RNA)\n- A nitrogenous base\n\n**DNA** has the bases: adenine (A), thymine (T), guanine (G), cytosine (C)  \n**RNA** has uracil (U) instead of thymine.\n\n---\n\n### DNA Replication\n\nBefore a cell divides, DNA makes an exact copy of itself:\n1. The double helix unwinds and unzips.\n2. Free nucleotides attach to the exposed bases.\n3. Two identical DNA molecules are formed.\n\n---\n\n### Protein Synthesis\n\nProtein synthesis occurs in two steps:\n\n**1. Transcription (in the nucleus):**\n- DNA unzips.\n- mRNA is formed from the DNA template and exits the nucleus.\n\n**2. Translation (at the ribosome):**\n- mRNA binds to a ribosome.\n- tRNA brings amino acids based on mRNA codons.\n- Amino acids are joined to form a protein.\n\n---\n\n### DNA Profiling\n\nEvery person has a unique DNA profile. This technique is used in:\n- Criminal investigations\n- Paternity testing\n- Identifying bodies\n\n---\n\n\n"
      },
      {
        "data": {
          "Title": "Reproduction in Vertebrates",
          "icon": "🐣",
          "flashcards": [
            {
              "front": {
                "title": "External Fertilisation",
                "question": "What is external fertilisation?"
              },
              "back": "It is when sperm fertilises the egg outside the body, usually in water, allowing sperm to swim to the egg."
            },
            {
              "front": {
                "title": "Internal Fertilisation",
                "question": "Why is internal fertilisation advantageous?"
              },
              "back": "It allows fertilisation in dry environments and increases the likelihood of successful reproduction."
            },
            {
              "front": {
                "title": "Ovipary vs Vivipary",
                "question": "What is the difference between ovipary and vivipary?"
              },
              "back": "Ovipary involves laying eggs; vivipary involves live birth after internal development of the embryo."
            }
          ]
        },
        "content": "\n## Reproduction in Vertebrates\n\nVertebrates have developed various reproductive strategies to adapt to their environments.\n\n**Strategies include:**\n\n- **External Fertilisation:** Takes place in water. E.g., amphibians.\n- **Internal Fertilisation:** Sperm is deposited inside the female body.\n- **Ovipary:** Eggs are laid and hatch outside the body.\n- **Vivipary:** Young develop inside the uterus and are born live.\n- **Ovovivipary:** Fertilised eggs develop inside the mother but nourishment comes from the yolk.\n- **Parental Care:** Increases chances of offspring survival.\n\nThese strategies maximize reproductive success and survival of the young.\n\n"
      },
      {
        "data": {
          "Title": "Human Reproduction",
          "icon": "👶",
          "flashcards": [
            {
              "front": {
                "title": "Function of Testes",
                "question": "What do the testes produce?"
              },
              "back": "Sperm cells and the hormone testosterone."
            },
            {
              "front": {
                "title": "Structure of Sperm",
                "question": "What are the parts of a sperm cell and their functions?"
              },
              "back": "Acrosome (enzymes), nucleus (DNA), mitochondria (energy), tail (movement)."
            },
            {
              "front": {
                "title": "Menstrual Cycle",
                "question": "What are the main phases of the menstrual cycle?"
              },
              "back": "Menstruation, follicular phase, ovulation, luteal phase."
            }
          ]
        },
        "content": "\n## Human Reproduction\n\n### Male Reproductive System\n\n- Testes produce sperm and testosterone.\n- Accessory glands (prostate, seminal vesicle, Cowper’s gland) contribute to semen.\n- Sperm cells are adapted for motility and fertilisation.\n\n### Female Reproductive System\n\n- Ovaries produce eggs and hormones (oestrogen, progesterone).\n- The menstrual cycle prepares the uterus for pregnancy.\n\n### Fertilisation and Development\n\n- Fertilisation occurs in the fallopian tube.\n- A zygote forms, implants in the uterus and develops into a fetus.\n\nHormonal control ensures coordination of reproduction.\n\n"
      },
      {
        "data": {
          "Title": "Genetics and Inheritance",
          "icon": "🧬",
          "flashcards": [
            {
              "front": {
                "title": "Gene",
                "question": "What is a gene?"
              },
              "back": "A small portion of DNA that codes for a particular characteristic. Found inside the chromosome, located in the nucleus of a cell."
            },
            {
              "front": {
                "title": "Alleles",
                "question": "What are alleles?"
              },
              "back": "Different forms of a gene at the same locus on homologous chromosomes. Example: Dominant (T) – tall, Recessive (t) – short."
            },
            {
              "front": {
                "title": "Genotype",
                "question": "What is a genotype?"
              },
              "back": "The genetic makeup of an organism. Examples: TT (homozygous dominant), Tt (heterozygous), tt (homozygous recessive)."
            },
            {
              "front": {
                "title": "Phenotype",
                "question": "What is a phenotype?"
              },
              "back": "The physical appearance of an organism determined by its genotype. Example: Tall or short plants."
            },
            {
              "front": {
                "title": "Dominant Allele",
                "question": "What is a dominant allele?"
              },
              "back": "An allele that is expressed in the phenotype when present in homozygous (TT) or heterozygous (Tt) form. Example: T for tall."
            },
            {
              "front": {
                "title": "Recessive Allele",
                "question": "What is a recessive allele?"
              },
              "back": "An allele masked in the heterozygous condition and only expressed in the homozygous condition. Example: t for short."
            },
            {
              "front": {
                "title": "Heterozygous",
                "question": "What does heterozygous mean?"
              },
              "back": "Having two different alleles for a trait. Example: Tt – phenotype is tall due to the dominant allele."
            },
            {
              "front": {
                "title": "Homozygous",
                "question": "What does homozygous mean?"
              },
              "back": "Having two identical alleles for a trait. Examples: TT – tall (dominant), tt – short (recessive)."
            },
            {
              "front": {
                "title": "Monohybrid Cross",
                "question": "What is a monohybrid cross?"
              },
              "back": "A genetic cross examining one characteristic or trait. Example: Flower colour – yellow vs white."
            },
            {
              "front": {
                "title": "Complete Dominance",
                "question": "What is complete dominance?"
              },
              "back": "A dominant allele fully masks the recessive allele in a heterozygous organism. Example: Tt results in a tall plant because T masks t."
            },
            {
              "front": {
                "title": "Incomplete Dominance",
                "question": "What is incomplete dominance?"
              },
              "back": "The offspring shows a phenotype that is intermediate between the parents. Example: Red × White flowers → Pink flowers."
            },
            {
              "front": {
                "title": "Co-dominance",
                "question": "What is co-dominance?"
              },
              "back": "Both alleles are equally expressed in the phenotype. Example: Red × White flowers → Flowers with red and white patches."
            },
            {
              "front": {
                "title": "Multiple Alleles",
                "question": "What are multiple alleles?"
              },
              "back": "More than two alternative forms of a gene exist at the same locus. Example: Blood groups IA, IB, and i."
            },
            {
              "front": {
                "title": "Sex-linked Characteristics",
                "question": "What are sex-linked characteristics?"
              },
              "back": "Traits carried on the sex chromosomes (usually X). Example: Haemophilia or colour-blindness – XᴴXʰ (carrier female), XʰY (affected male)."
            },
            {
              "front": {
                "title": "Karyotype",
                "question": "What is a karyotype?"
              },
              "back": "The number, shape, and arrangement of chromosomes in the nucleus of a somatic cell. Used to detect chromosomal abnormalities."
            },
            {
              "front": {
                "title": "Cloning",
                "question": "What is cloning?"
              },
              "back": "A process to produce genetically identical organisms. Example: Dolly the sheep was cloned from a diploid cell."
            },
            {
              "front": {
                "title": "Genetic Modification",
                "question": "What is genetic modification?"
              },
              "back": "Altering genetic material to produce desired traits. Example: Inserting the human insulin gene into bacteria to produce insulin."
            },
            {
              "front": {
                "title": "Human Genome",
                "question": "What is the human genome?"
              },
              "back": "A complete map of all genes on human chromosomes. Example: Gene 3 on chromosome 4 controls a specific trait."
            }
          ]
        },
        "content": "\n## Genetics and Inheritance\n\nGenetics is the study of heredity — how traits are passed from one generation to another.\n\n**Key Concepts:**\n\n- **Alleles:** Different forms of a gene.\n- **Dominance:** Alleles may be dominant, recessive, or show co-dominance.\n- **Genetic Crosses:** Punnett squares predict inheritance patterns.\n- **Sex Determination:** XX = female, XY = male.\n- **Mutations:** Changes in DNA that may lead to new traits or diseases.\n- **Pedigree Diagrams:** Trace inheritance in families.\n\n## Genetic Crosses\n### Monohybrid Cross\nThe follwing genetic problem format is used to solve all monohybrid genetic problems:\n- **P1** Phenotype\n- Genotype\n- Meiosis\n- Gametes\n- Fetilization\n- **F1** Genotype\n- Phenotype\n\n#### Common monohybrid Crosses\n1) Heterozygous parent (Tt) and homozygous recessive parent (tt) produce F1 offspring that are:\n- 50% heterozygous (Tt)\n→ 50% homozygous recessive (tt)\n\n2) Homozygous dominant parent (TT) and homozygous recessive parent (tt) produce F1 offspring that are:\n- 100% heterozygous (Tt)\n\n3) Homozygous dominant parent (TT) and heterozygous parent (Tt) produce F1 offspring that are:\n- 50% homozygous dominant (TT)\n- 50% heterozygous (Tt)\n\n4) Two heterozygous parents (Tt × Tt) produce F1 offspring that are:\n- 25% homozygous dominant (TT)\n- 50% heterozygous (Tt)\n- 25% homozygous recessive (tt)\n\n### Dihybrid cross\nA dihybrid cross looks at how two different characteristics are inherited at the same time (e.g. seed colour and seed shape).\nMendel’s Law of Independent Assortment explains how this works.\n\n#### Law of Independant Assortment\nGenes for different traits (like colour and shape) are passed on independently of each other during reproduction.\n\nThis means the way one trait is inherited doesn't affect the other.\n\nIt happens because the alleles (gene versions) for each trait mix randomly when gametes (sex cells) are formed.\n\nImportant: This law only works if the genes for the traits are on different chromosomes.\n"
      },
      {
        "data": {
          "Title": "Responding to the Environment (Humans)",
          "icon": "🧠",
          "flashcards": [
            {
              "front": {
                "title": "Central Nervous System",
                "question": "What are the two main parts of the central nervous system?"
              },
              "back": "The brain and the spinal cord."
            },
            {
              "front": {
                "title": "Reflex Arc",
                "question": "What is a reflex arc?"
              },
              "back": "A pathway that controls an involuntary response to a stimulus, involving a sensory neuron, interneuron, and motor neuron."
            },
            {
              "front": {
                "title": "Function of the Cerebellum",
                "question": "What is the role of the cerebellum in the brain?"
              },
              "back": "The cerebellum coordinates voluntary movements and helps maintain posture and balance."
            },
            {
              "front": {
                "title": "Sense Organs",
                "question": "What are the five main sense organs?"
              },
              "back": "Eyes, ears, skin, tongue, and nose."
            },
            {
              "front": {
                "title": "Homeostasis Link",
                "question": "How is the nervous system linked to homeostasis?"
              },
              "back": "It detects changes in the environment and sends signals to organs to maintain stable internal conditions."
            }
          ]
        },
        "content": "\n## Responding to the Environment (Humans)\n\nHumans respond to their environment through a complex network of nerves and sense organs that detect stimuli and coordinate responses.\n\n### Nervous System\n\n**Two main parts:**\n- **Central Nervous System (CNS):** Brain and spinal cord\n- **Peripheral Nervous System (PNS):** Nerves that connect the CNS to the body\n\n### Neurons\n\nThree types:\n- **Sensory neurons:** Detect stimuli and send signals to the CNS\n- **Interneurons:** Process information in the CNS\n- **Motor neurons:** Send instructions to effectors (muscles/glands)\n\n### Reflex Arc\n\nAn automatic, fast response to stimuli that bypasses conscious brain input. It includes:\n1. Receptor → 2. Sensory neuron → 3. Interneuron → 4. Motor neuron → 5. Effector\n\n### Brain Functions\n\n- **Cerebrum:** Thinking, memory, and voluntary movement\n- **Cerebellum:** Balance and coordination\n- **Medulla oblongata:** Involuntary actions (e.g., heartbeat, breathing)\n\n### Sense Organs\n\nEach sense organ contains **receptors** that detect specific types of stimuli:\n- Eyes (light)\n- Ears (sound and balance)\n- Skin (touch, pressure, pain, temperature)\n- Tongue (taste)\n- Nose (smell)\n\n---\n\n"
      },
      {
        "data": {
          "Title": "Endocrine System",
          "icon": "🕹️",
          "flashcards": [
            {
              "front": {
                "title": "What is the endocrine system?",
                "question": "What is the primary function of the endocrine system?"
              },
              "back": "The endocrine system regulates body functions by releasing hormones into the bloodstream."
            },
            {
              "front": {
                "title": "Hormones",
                "question": "What are hormones?"
              },
              "back": "Hormones are chemical messengers secreted by endocrine glands that affect target organs."
            },
            {
              "front": {
                "title": "Glands of the Endocrine System",
                "question": "Which are the major endocrine glands?"
              },
              "back": "Pituitary gland, thyroid gland, adrenal glands, pancreas, ovaries, and testes."
            },
            {
              "front": {
                "title": "Pancreas",
                "question": "What hormones are produced by the pancreas and what do they regulate?"
              },
              "back": "Insulin and glucagon; they regulate blood glucose levels."
            },
            {
              "front": {
                "title": "Negative Feedback",
                "question": "What is negative feedback in the endocrine system?"
              },
              "back": "A process where the body detects a change and responds to reverse that change, maintaining balance (homeostasis)."
            }
          ]
        },
        "content": "\n## Endocrine System\n\nThe **endocrine system** consists of glands that release hormones into the blood to control various body functions like growth, metabolism, and reproduction.\n\n### Characteristics of the Endocrine System\n\n- Works more slowly than the nervous system\n- Uses **hormones**, which are chemical messengers\n- Hormones travel through the **bloodstream**\n- Effects are longer-lasting than nerve impulses\n\n### Major Endocrine Glands and Their Functions\n\n- **Pituitary gland:** The \"master gland\" that regulates other glands and growth hormone\n- **Thyroid gland:** Regulates metabolism through thyroxine\n- **Adrenal glands:** Produces adrenaline for fight or flight response\n- **Pancreas:** Produces insulin (lowers blood sugar) and glucagon (raises blood sugar)\n- **Ovaries:** Produce oestrogen and progesterone\n- **Testes:** Produce testosterone\n\n### Hormonal Control and Homeostasis\n\nHormones work through **negative feedback mechanisms**. For example, when blood sugar rises:\n1. Pancreas releases **insulin**\n2. Cells absorb glucose, lowering blood sugar\n3. Pancreas stops insulin release\n\n---\n\n"
      },
      {
        "data": {
          "Title": "Homeostasis in Humans",
          "icon": "🌡️",
          "flashcards": [
            {
              "front": {
                "title": "Definition of Homeostasis",
                "question": "What is homeostasis?"
              },
              "back": "Homeostasis is the maintenance of a constant internal environment in the body."
            },
            {
              "front": {
                "title": "Importance of Homeostasis",
                "question": "Why is homeostasis important?"
              },
              "back": "It ensures that enzymes and cells function optimally by maintaining stable internal conditions."
            },
            {
              "front": {
                "title": "Body Temperature Regulation",
                "question": "How does the body regulate temperature when it is too hot?"
              },
              "back": "By sweating and vasodilation to release heat through the skin."
            },
            {
              "front": {
                "title": "Glucose Regulation",
                "question": "Which hormones regulate blood sugar levels?"
              },
              "back": "Insulin lowers blood glucose; glucagon raises it."
            },
            {
              "front": {
                "title": "Negative Feedback in Homeostasis",
                "question": "What is the role of negative feedback in homeostasis?"
              },
              "back": "It reverses changes to bring internal conditions back to normal."
            }
          ]
        },
        "content": "\n## Homeostasis in Humans\n\n**Homeostasis** is the process by which the body maintains a stable internal environment despite external changes. This is crucial for proper cell function and enzyme activity.\n\n### Key Examples of Homeostasis\n\n#### 1. **Temperature Regulation**\n- Normal body temperature: ~37°C\n- Controlled by the **hypothalamus**\n- If too hot:\n  - Sweat glands release sweat (evaporation cools the body)\n  - Vasodilation: blood vessels widen to increase heat loss\n- If too cold:\n  - Shivering generates heat\n  - Vasoconstriction: blood vessels narrow to retain heat\n\n#### 2. **Blood Glucose Regulation**\n- Controlled by the **pancreas**\n- **Insulin** lowers high blood glucose by promoting glucose uptake by cells and storage as glycogen in the liver\n- **Glucagon** raises low blood glucose by converting glycogen back to glucose\n\n#### 3. **Water Balance**\n- Regulated by the **kidneys** and **ADH (antidiuretic hormone)**\n- ADH controls how much water is reabsorbed by the kidneys\n\n### Negative Feedback Mechanism\n\nA **negative feedback loop** is when a change triggers a response that reverses the change to maintain balance.\n\n> Example: If body temperature rises, mechanisms reduce it. Once it's normal, the response stops.\n\n---\n\n"
      },
      {
        "data": {},
        "content": "Here is the markdown lesson for **Topic 9: Responding to the Environment (Plants)**:\n\n---\n\n### 📘 **9. Responding to the Environment (Plants)**\n```markdown\n---\nTitle: Responding to the Environment (Plants)\nicon: 🌱\nflashcards: [\n  {\n    front: {\n      title: \"Plant Hormones\",\n      question: \"What are auxins?\"\n    },\n    back: \"Auxins are plant hormones that promote cell elongation and are responsible for growth responses like phototropism and geotropism.\"\n  },\n  {\n    front: {\n      title: \"Phototropism\",\n      question: \"What is phototropism?\"\n    },\n    back: \"Phototropism is the growth of a plant towards light. It is a positive tropism controlled by auxins.\"\n  },\n  {\n    front: {\n      title: \"Geotropism\",\n      question: \"What is geotropism (gravitropism)?\"\n    },\n    back: \"Geotropism is a plant's growth response to gravity. Roots grow downward (positive), and shoots grow upward (negative).\"\n  },\n  {\n    front: {\n      title: \"Tropisms\",\n      question: \"What are tropisms?\"\n    },\n    back: \"Tropisms are directional growth responses in plants toward or away from environmental stimuli like light, gravity, or touch.\"\n  },\n  {\n    front: {\n      title: \"Apical Dominance\",\n      question: \"What is apical dominance?\"\n    },\n    back: \"Apical dominance is when the main central stem grows more strongly than the side branches due to the concentration of auxins at the tip.\"\n  }\n]\n---\n\n## Responding to the Environment (Plants)\n\nPlants respond to environmental stimuli in ways that help them survive and grow. These responses are controlled by **plant hormones**, especially **auxins**.\n\n### Plant Hormones\n\n- **Auxins:** Stimulate elongation of cells, primarily found in shoot tips.\n- Distributed unevenly in response to light and gravity.\n- Other hormones include gibberellins, cytokinins, abscisic acid, and ethylene.\n\n### Types of Tropisms\n\n- **Phototropism:** Growth towards light (positive phototropism in shoots).\n- **Geotropism (Gravitropism):** \n  - Positive in roots (growing downward).\n  - Negative in shoots (growing upward).\n- **Thigmotropism:** Response to touch (e.g., tendrils coiling around objects).\n\n### How Auxins Work\n\n- In shoots, auxins accumulate on the shaded side → cells elongate → shoot bends toward light.\n- In roots, auxins inhibit cell elongation on the lower side → root grows downward.\n\n### Apical Dominance\n\n- The apical bud suppresses the growth of lateral buds.\n- Cutting the apical bud allows lateral branches to grow.\n\n---\n"
      }
    ],
    "4": [
      {
        "data": {
          "Title": "Laws of Exponents",
          "icon": "🧮",
          "flashcards": [
            {
              "front": {
                "title": "Exponential Notation",
                "question": "How is a number written in exponential notation?"
              },
              "back": "A number is written as aⁿ, where n is any natural number and a is any real number.  'a' is the base and 'n' is the exponent or index."
            },
            {
              "front": {
                "title": "Definition of a⁰",
                "question": "What is a⁰ equal to?"
              },
              "back": "a⁰ = 1, if a ≠ 0"
            },
            {
              "front": {
                "title": "Definition of a⁻ⁿ",
                "question": "How is a⁻ⁿ defined?"
              },
              "back": "a⁻ⁿ = 1/aⁿ, if a ≠ 0"
            },
            {
              "front": {
                "title": "Definition of 1/a⁻ⁿ",
                "question": "What is 1/a⁻ⁿ equal to?"
              },
              "back": "1/a⁻ⁿ = aⁿ, if a ≠ 0"
            },
            {
              "front": {
                "title": "Product of Powers",
                "question": "What is the rule for multiplying powers with the same base?"
              },
              "back": "aᵐ × aⁿ = aᵐ⁺ⁿ"
            },
            {
              "front": {
                "title": "Quotient of Powers",
                "question": "What is the rule for dividing powers with the same base?"
              },
              "back": "aᵐ / aⁿ = aᵐ⁻ⁿ"
            },
            {
              "front": {
                "title": "Power of a Product",
                "question": "What is the rule for raising a product to a power?"
              },
              "back": "(ab)ⁿ = aⁿbⁿ"
            },
            {
              "front": {
                "title": "Power of a Quotient",
                "question": "What is the rule for raising a quotient to a power?"
              },
              "back": "(a/b)ⁿ = aⁿ/bⁿ"
            },
            {
              "front": {
                "title": "Power of a Power",
                "question": "What is the rule for raising a power to another power?"
              },
              "back": "(aᵐ)ⁿ = aᵐⁿ"
            },
            {
              "front": {
                "title": "Simplifying Exponential Expressions",
                "question": "How do you simplify expressions with exponents?"
              },
              "back": "Reduce bases to prime bases or factorize."
            },
            {
              "front": {
                "title": "Solving Exponential Equations",
                "question": "How do you solve equations with exponents?"
              },
              "back": "If aˣ = aʸ, then x = y; or factorize the expressions."
            }
          ]
        },
        "content": "\n## Laws of Exponents\n\n### Chapter Summary\n\nExponential notation represents a number as *aⁿ*, where *n* is any natural number and *a* is any real number.  *a* is the base, and *n* is the exponent or index.\n\n**Definitions:**\n\n*   *aⁿ* = a × a × ... × a (*n* times)\n*   *a⁰* = 1, if *a* ≠ 0\n*   *a⁻ⁿ* = 1/*aⁿ*, if *a* ≠ 0\n*   1/*a⁻ⁿ* = *aⁿ*, if *a* ≠ 0\n\n\n**Laws of Exponents:**\n\n*   *aᵐ* × *aⁿ* = *aᵐ⁺ⁿ*\n*   *aᵐ* / *aⁿ* = *aᵐ⁻ⁿ*\n*   (*ab*)ⁿ = *aⁿbⁿ*\n*   (*a*/b*)ⁿ = *aⁿ*/bⁿ*\n*   (*aᵐ*)ⁿ = *aᵐⁿ*\n\nWhen simplifying expressions with exponents, reduce the bases to prime bases or factorize.  When solving equations with exponents, if *aˣ* = *aʸ*, then *x* = *y*; alternatively, factorize the expressions.\n"
      },
      {
        "data": {
          "Title": "Descriptive Statistics",
          "icon": "📊",
          "flashcards": [
            {
              "front": {
                "title": "Data",
                "question": "What is data in the context of statistics?"
              },
              "back": "Data are pieces of information observed and recorded from experiments or surveys."
            },
            {
              "front": {
                "title": "Quantitative Data",
                "question": "What are quantitative data?"
              },
              "back": "Data that can be expressed numerically.  Can be discrete or continuous."
            },
            {
              "front": {
                "title": "Qualitative Data",
                "question": "What are qualitative data?"
              },
              "back": "Data that cannot be expressed numerically.  Includes categorical and anecdotal data."
            },
            {
              "front": {
                "title": "Mean",
                "question": "How is the mean calculated?"
              },
              "back": "The sum of a set of values divided by the number of values.\n```math\n      ∑ xi\n x̄ = ─────\n       n\n```"
            },
            {
              "front": {
                "title": "Median",
                "question": "How is the median determined?"
              },
              "back": "The middle value in an ordered data set.  If there's an even number of values, it's the average of the two middle values."
            },
            {
              "front": {
                "title": "Mode",
                "question": "What is the mode of a data set?"
              },
              "back": "The value that appears most frequently in a data set."
            },
            {
              "front": {
                "title": "Outlier",
                "question": "What is an outlier?"
              },
              "back": "A value significantly different from the other values in a data set."
            },
            {
              "front": {
                "title": "Grouping Continuous Data",
                "question": "How can continuous data be made discrete?"
              },
              "back": "By dividing the range of values into sub-ranges (classes) and assigning each value to its respective class."
            },
            {
              "front": {
                "title": "Dispersion",
                "question": "What does dispersion refer to in statistics?"
              },
              "back": "Statistics that describe how values are distributed around the center (mean, median)."
            },
            {
              "front": {
                "title": "Range",
                "question": "How is the range calculated?"
              },
              "back": "The difference between the maximum and minimum values in a data set."
            },
            {
              "front": {
                "title": "Percentile",
                "question": "What is the pth percentile?"
              },
              "back": "The value, v, below which p% of the data falls.  Calculated using:\n```math\nr = (p/100)(n - 1) + 1\n``` where n is the number of values."
            },
            {
              "front": {
                "title": "Quartiles",
                "question": "What are quartiles?"
              },
              "back": "Three values (Q1, Q2, Q3) that divide an ordered data set into four equal parts. Q2 is the median."
            },
            {
              "front": {
                "title": "Interquartile Range (IQR)",
                "question": "How is the IQR calculated?"
              },
              "back": "The difference between the upper quartile (Q3) and the lower quartile (Q1). Represents the range of the middle 50% of data."
            },
            {
              "front": {
                "title": "Semi-Interquartile Range",
                "question": "How is the semi-IQR calculated?"
              },
              "back": "Half of the interquartile range."
            },
            {
              "front": {
                "title": "Five-Number Summary",
                "question": "What constitutes the five-number summary?"
              },
              "back": "Minimum value, Q1, Q2 (median), Q3, Maximum value."
            },
            {
              "front": {
                "title": "Box-and-Whisker Plot",
                "question": "What is a box-and-whisker plot?"
              },
              "back": "A graphical representation of the five-number summary."
            }
          ]
        },
        "content": "\n# Descriptive Statistics\n\n## Data Types\n\n* **Data:** Pieces of information observed and recorded.\n* **Quantitative Data:** Numerical data (discrete or continuous).\n* **Qualitative Data:** Non-numerical data (categorical or anecdotal).\n\n\n## Measures of Central Tendency\n\n* **Mean (Average):**  The sum of values divided by the number of values.\n    ```math\n          ∑ xi\n    x̄ = ─────\n         n\n    ```\n* **Median:** The middle value in an ordered data set.\n* **Mode:** The most frequent value.\n\n\n## Measures of Dispersion\n\n* **Outlier:** A value significantly different from others.\n* **Range:** The difference between the maximum and minimum values.\n* **Percentile:** The value below which a given percentage of data falls.  The formula for the pth percentile is:\n    ```math\n    r = (p/100)(n - 1) + 1\n    ```\n* **Quartiles:** Q1, Q2 (median), Q3 divide data into four equal parts.\n* **Interquartile Range (IQR):** Q3 - Q1.\n* **Semi-Interquartile Range:** IQR / 2.\n* **Five-Number Summary:** Minimum, Q1, Median, Q3, Maximum.\n* **Box-and-Whisker Plot:** A visual representation of the five-number summary.\n\n##  Working with Continuous Data\n\nContinuous quantitative data can be made discrete by grouping values into classes or sub-ranges.\n"
      },
      {
        "data": {
          "Title": "Trigonometry of Right-Angled Triangles",
          "icon": "📐",
          "flashcards": [
            {
              "front": {
                "title": "Trigonometric Ratios",
                "question": "What are the three basic trigonometric ratios?"
              },
              "back": "The three basic trigonometric ratios for a right-angled triangle are: \n\n* sine (sin):  opposite/hypotenuse\n* cosine (cos): adjacent/hypotenuse\n* tangent (tan): opposite/adjacent"
            },
            {
              "front": {
                "title": "Angle of Elevation",
                "question": "Define the angle of elevation."
              },
              "back": "The angle of elevation is the angle between the line of sight to an object above the horizontal and the horizontal plane."
            },
            {
              "front": {
                "title": "Angle of Depression",
                "question": "Define the angle of depression."
              },
              "back": "The angle of depression is the angle between the line of sight to an object below the horizontal and the horizontal plane."
            },
            {
              "front": {
                "title": "Applications of Trigonometry",
                "question": "Give an example of how trigonometry is used to solve problems."
              },
              "back": "Trigonometry is used to solve problems involving right-angled triangles in two dimensions. For example, finding the height of a building given the angle of elevation and distance from the base."
            }
          ]
        },
        "content": "\n# Trigonometry of Right-Angled Triangles\n\n## Trigonometric Ratios\n\nWe can define three trigonometric ratios for right-angled triangles:\n\n*   **Sine (sin):**  `opposite/hypotenuse`\n*   **Cosine (cos):** `adjacent/hypotenuse`\n*   **Tangent (tan):** `opposite/adjacent`\n\n\n## Angles of Elevation and Depression\n\n*   **Angle of elevation:** The angle formed by the line of sight and the horizontal plane when looking *up* at an object.\n\n*   **Angle of depression:** The angle formed by the line of sight and the horizontal plane when looking *down* at an object.\n\n\n## Applications\n\nTrigonometry is used to solve problems in two dimensions involving right-angled triangles.  A common application is calculating heights or distances that are difficult to measure directly, such as finding the height of a building or the width of a river.\n"
      },
      {
        "data": {
          "Title": "Quadrilaterals and the Mid-Point Theorem",
          "icon": "⬜",
          "flashcards": [
            {
              "front": {
                "title": "Quadrilateral",
                "question": "What is a quadrilateral?"
              },
              "back": "A closed shape with four straight line segments."
            },
            {
              "front": {
                "title": "Parallelogram",
                "question": "List three properties of a parallelogram."
              },
              "back": "• Both pairs of opposite sides are parallel and equal.\n• Both pairs of opposite angles are equal.\n• Diagonals bisect each other."
            },
            {
              "front": {
                "title": "Rectangle",
                "question": "What makes a rectangle different from a parallelogram?"
              },
              "back": "All four angles are 90°.  Diagonals are equal in length."
            },
            {
              "front": {
                "title": "Rhombus",
                "question": "What is a rhombus?"
              },
              "back": "A parallelogram with all four sides equal in length. Diagonals bisect each other at 90° and bisect the opposite angles."
            },
            {
              "front": {
                "title": "Square",
                "question": "What is a square?"
              },
              "back": "A rhombus with all four angles equal to 90°."
            },
            {
              "front": {
                "title": "Trapezium",
                "question": "What is a trapezium?"
              },
              "back": "A quadrilateral with one pair of opposite sides parallel."
            },
            {
              "front": {
                "title": "Kite",
                "question": "Describe a kite and one of its properties."
              },
              "back": "A quadrilateral with two pairs of adjacent sides equal. One pair of opposite angles are equal (the angles between unequal sides)."
            },
            {
              "front": {
                "title": "Mid-point Theorem",
                "question": "State the mid-point theorem."
              },
              "back": "The line joining the mid-points of two sides of a triangle is parallel to the third side and half its length."
            }
          ]
        },
        "content": "\n## Quadrilaterals and the Mid-Point Theorem\n\n### Quadrilaterals\n\nA quadrilateral is a closed shape with four straight line segments.  Several special types of quadrilaterals exist:\n\n#### Parallelogram\n\n*   Both pairs of opposite sides are parallel and equal in length.\n*   Both pairs of opposite angles are equal.\n*   The diagonals bisect each other.\n\n#### Rectangle\n\n*   All properties of a parallelogram.\n*   All four angles are 90°.\n*   Diagonals are equal in length.\n\n#### Rhombus\n\n*   All properties of a parallelogram.\n*   All four sides are equal in length.\n*   Diagonals bisect each other at 90°.\n*   Diagonals bisect the opposite angles.\n\n#### Square\n\n*   All properties of a rectangle and a rhombus.\n\n\n#### Trapezium\n\n*   One pair of opposite sides is parallel.\n\n#### Kite\n\n*   Two pairs of adjacent sides are equal.\n*   One pair of opposite angles are equal (the angles between unequal sides).\n*   The diagonal connecting the equal sides bisects the other diagonal.\n*   The diagonal connecting the equal sides bisects the angles it connects.\n*   The diagonals intersect at 90°.\n\n\n### Mid-Point Theorem\n\nThe line segment joining the mid-points of two sides of a triangle is parallel to the third side and is half the length of the third side.\n"
      },
      {
        "data": {
          "Title": "Area, Volume, and Surface Area of Geometric Solids",
          "icon": "📐",
          "flashcards": [
            {
              "front": {
                "title": "Area of a Square",
                "question": "What is the formula for the area of a square?"
              },
              "back": "Area = s² where s is the side length"
            },
            {
              "front": {
                "title": "Area of a Rectangle",
                "question": "How do you calculate the area of a rectangle?"
              },
              "back": "Area = b × h where b is the base and h is the height"
            },
            {
              "front": {
                "title": "Area of a Triangle",
                "question": "What's the formula for the area of a triangle?"
              },
              "back": "Area = (1/2) × b × h where b is the base and h is the height"
            },
            {
              "front": {
                "title": "Area of a Trapezium",
                "question": "How do you find the area of a trapezium?"
              },
              "back": "Area = (1/2)(a + b) × h where a and b are the parallel sides and h is the height"
            },
            {
              "front": {
                "title": "Area of a Parallelogram",
                "question": "What is the area formula for a parallelogram?"
              },
              "back": "Area = b × h where b is the base and h is the height"
            },
            {
              "front": {
                "title": "Area of a Circle",
                "question": "Give the formula for the area of a circle."
              },
              "back": "Area = πr² where r is the radius"
            },
            {
              "front": {
                "title": "Volume of a Rectangular Prism",
                "question": "How do you calculate the volume of a rectangular prism?"
              },
              "back": "Volume = l × b × h where l is length, b is width, and h is height"
            },
            {
              "front": {
                "title": "Volume of a Triangular Prism",
                "question": "What is the formula for the volume of a triangular prism?"
              },
              "back": "Volume = (1/2 × b × h) × H where b and h are the base and height of the triangle, and H is the prism's height"
            },
            {
              "front": {
                "title": "Volume of a Cube",
                "question": "What is the volume of a cube with side length s?"
              },
              "back": "Volume = s³"
            },
            {
              "front": {
                "title": "Volume of a Cylinder",
                "question": "Give the formula for the volume of a cylinder."
              },
              "back": "Volume = πr² × h where r is the radius and h is the height"
            },
            {
              "front": {
                "title": "Surface Area of a Square Pyramid",
                "question": "What is the formula for the surface area of a square pyramid?"
              },
              "back": "Surface Area = b(b + 2h) where b is the base side and h is the slant height"
            },
            {
              "front": {
                "title": "Surface Area of a Triangular Pyramid",
                "question": "How do you calculate the surface area of a triangular pyramid?"
              },
              "back": "Surface Area = (1/2)b(hb + 3hs) where b is the base, hb is the base height, and hs is the slant height"
            },
            {
              "front": {
                "title": "Surface Area of a Right Cone",
                "question": "Give the formula for the surface area of a right cone."
              },
              "back": "Surface Area = πr(r + hs) where r is the radius and hs is the slant height"
            },
            {
              "front": {
                "title": "Surface Area of a Sphere",
                "question": "What is the formula for the surface area of a sphere?"
              },
              "back": "Surface Area = 4πr² where r is the radius"
            },
            {
              "front": {
                "title": "Volume of a Square Pyramid",
                "question": "What is the volume of a square pyramid?"
              },
              "back": "Volume = (1/3) × b² × H where b is the base side and H is the height"
            },
            {
              "front": {
                "title": "Volume of a Triangular Pyramid",
                "question": "How do you calculate the volume of a triangular pyramid?"
              },
              "back": "Volume = (1/3) × (1/2 × b × h) × H where b and h are the base and height of the triangle, and H is the pyramid's height"
            },
            {
              "front": {
                "title": "Volume of a Right Cone",
                "question": "Give the formula for the volume of a right cone."
              },
              "back": "Volume = (1/3) × πr² × H where r is the radius and H is the height"
            },
            {
              "front": {
                "title": "Volume of a Sphere",
                "question": "What is the formula for the volume of a sphere?"
              },
              "back": "Volume = (4/3)πr³ where r is the radius"
            }
          ]
        },
        "content": "\n## Area, Volume, and Surface Area of Geometric Solids\n\nThis document summarizes formulas for calculating the area, volume, and surface area of various geometric solids.\n\n### Area\n\nArea is the two-dimensional space enclosed within a flat object's boundary. It is measured in square units.  Formulas for common shapes include:\n\n* **Square:** Area = s² (where s is the side length)\n* **Rectangle:** Area = b × h (where b is the base and h is the height)\n* **Triangle:** Area = (1/2) × b × h (where b is the base and h is the height)\n* **Trapezium:** Area = (1/2)(a + b) × h (where a and b are the parallel sides and h is the height)\n* **Parallelogram:** Area = b × h (where b is the base and h is the height)\n* **Circle:** Area = πr² (where r is the radius)\n\n\n### Prisms and Cylinders\n\nA right prism has a polygon base, vertical sides perpendicular to the base, and identical top and bottom surfaces.  A cylinder is a right prism with a circular base.\n\n* **Surface Area:** The total area of the exposed surfaces.  (Specific formulas depend on the shape of the prism).\n* **Volume:** The three-dimensional space occupied. Formulas include:\n    * **Rectangular Prism:** Volume = l × b × h (where l is length, b is width, and h is height)\n    * **Triangular Prism:** Volume = (1/2 × b × h) × H (where b and h are the base and height of the triangle, and H is the prism's height)\n    * **Cube (Square Prism):** Volume = s³ (where s is the side length)\n    * **Cylinder:** Volume = πr² × h (where r is the radius and h is the height)\n\n\n### Pyramids, Cones, and Spheres\n\n* **Pyramid:** A geometric solid with a polygon base and sides converging at a point (the apex).  A right pyramid has an apex directly above the center of the base.\n* **Cone:** Similar to a pyramid, but with a circular base.  A right cone has its apex directly above the center of the base.\n* **Sphere:** A perfectly round solid.\n\nSurface area and volume formulas for these shapes are:\n\n**Surface Area:**\n\n* **Square Pyramid:**  Area = b(b + 2h) (where b is base side and h is slant height)\n* **Triangular Pyramid:** Area = (1/2)b(hb + 3hs) (where b is base length, hb is base height, hs is slant height)\n* **Right Cone:** Area = πr(r + hs) (where r is the radius and hs is the slant height)\n* **Sphere:** Area = 4πr² (where r is the radius)\n\n**Volume:**\n\n* **Square Pyramid:** Volume = (1/3) × b² × H (where b is the base side and H is the height)\n* **Triangular Pyramid:** Volume = (1/3) × (1/2 × b × h) × H (where b and h are the base and height of the triangle, and H is the pyramid's height)\n* **Right Cone:** Volume = (1/3) × πr² × H (where r is the radius and H is the height)\n* **Sphere:** Volume = (4/3)πr³ (where r is the radius)\n\n\n### Scaling\n\nMultiplying one or more dimensions of a prism or cylinder by a constant *k* will affect the surface area and volume.  The exact effect depends on which dimensions are scaled.\n"
      },
      {
        "data": {
          "Title": "Probability Fundamentals",
          "icon": "🎲",
          "flashcards": [
            {
              "front": {
                "title": "Experiment",
                "question": "What is an experiment in probability?"
              },
              "back": "An uncertain process."
            },
            {
              "front": {
                "title": "Outcome",
                "question": "What is an outcome in probability?"
              },
              "back": "A single result of an experiment."
            },
            {
              "front": {
                "title": "Sample Space",
                "question": "Define sample space and its notation."
              },
              "back": "The set of all possible outcomes of an experiment.  Denoted by S, with size n(S)."
            },
            {
              "front": {
                "title": "Event",
                "question": "What is an event in probability?"
              },
              "back": "A specific set of outcomes of an experiment. Denoted by E, with size n(E)."
            },
            {
              "front": {
                "title": "Probability",
                "question": "Define probability and its range."
              },
              "back": "A real number between 0 and 1 describing the likelihood of an event occurring. 0 means it never occurs, 1 means it always occurs."
            },
            {
              "front": {
                "title": "Theoretical Probability",
                "question": "How do you calculate theoretical probability?"
              },
              "back": "When all outcomes are equally likely, it's the ratio of the number of favorable outcomes to the total number of possible outcomes:  P(E) = n(E) / n(S)"
            },
            {
              "front": {
                "title": "Relative Frequency",
                "question": "How do you calculate relative frequency?"
              },
              "back": "The number of times an event occurs divided by the total number of trials: f = p/n (where p is positive trials and n is total trials)."
            },
            {
              "front": {
                "title": "Union of Events",
                "question": "What is the union of two events?"
              },
              "back": "A new set containing all elements in at least one of the two sets (A∪B or A or B)."
            },
            {
              "front": {
                "title": "Intersection of Events",
                "question": "What is the intersection of two events?"
              },
              "back": "A new set containing all elements in both sets (A∩B or A and B)."
            },
            {
              "front": {
                "title": "Probability of the Sample Space",
                "question": "What is the probability of the sample space?"
              },
              "back": "P(S) = 1"
            },
            {
              "front": {
                "title": "Probability of the Union of Two Events",
                "question": "Give the formula for the probability of the union of two events."
              },
              "back": "P(A∪B) = P(A) + P(B) - P(A∩B)"
            },
            {
              "front": {
                "title": "Mutually Exclusive Events",
                "question": "Define mutually exclusive events."
              },
              "back": "Two events that cannot occur at the same time."
            },
            {
              "front": {
                "title": "Complement of a Set",
                "question": "What is the complement of a set A?"
              },
              "back": "A set containing all elements not in A (A' or not(A))."
            },
            {
              "front": {
                "title": "Complementary Events",
                "question": "What are the characteristics of complementary events?"
              },
              "back": "They are mutually exclusive (A∩A' = Ø) and their union covers the sample space (A∪A' = S). Their probabilities sum to 1: P(A) + P(A') = 1."
            }
          ]
        },
        "content": "\n## Probability Fundamentals\n\n### Basic Concepts\n\n*   An **experiment** is an uncertain process.\n*   An **outcome** is a single result of an experiment.\n*   The **sample space (S)** is the set of all possible outcomes, with size n(S).\n*   An **event (E)** is a specific set of outcomes, with size n(E).\n*   **Probability** is a number between 0 and 1 representing the likelihood of an event.  A probability of 0 means the event will never occur, and a probability of 1 means it will always occur.\n\n### Calculating Probabilities\n\n*   The **theoretical probability** of an event E, when all outcomes are equally likely, is:\n\n```math\n      n(E)\nP(E) = ─────\n      n(S)\n```\n\n*   The **relative frequency** of an event is:\n\n```math\n      p\nf = ─────\n      n\n```\n\nwhere *p* is the number of positive trials and *n* is the total number of trials.\n\n\n### Set Operations and Probabilities\n\n*   The **union (A∪B or A or B)** of two sets contains all elements in at least one set.\n*   The **intersection (A∩B or A and B)** of two sets contains all elements in both sets.\n*   **Mutually exclusive events** cannot occur at the same time.\n*   The **complement (A')** of a set A contains all elements not in A.\n*   For complementary events:\n    *   A ∩ A' = Ø (empty set)\n    *   A ∪ A' = S\n    *   P(A) + P(A') = 1\n\n* The probability of the union of two events A and B is:\n\n```math\n      P(A) + P(B) - P(A ∩ B)\nP(A ∪ B) = ─────────────────\n                    1\n```\n\n"
      },
      {
        "data": {
          "Title": "Arithmetic Sequences",
          "icon": "🧮",
          "flashcards": [
            {
              "front": {
                "title": "General Term of an Arithmetic Sequence",
                "question": "How do you express the nth term of an arithmetic sequence?"
              },
              "back": "The nth term, T<sub>n</sub>, represents the general term of an arithmetic sequence."
            },
            {
              "front": {
                "title": "Common Difference",
                "question": "How is the common difference (d) of an arithmetic sequence defined?"
              },
              "back": "The common difference, d, is the difference between any two consecutive terms:  d = T<sub>n</sub> - T<sub>n-1</sub>"
            },
            {
              "front": {
                "title": "Formula for the nth term",
                "question": "What is the general formula to find any term in an arithmetic sequence?"
              },
              "back": "While a specific formula isn't provided in the notes,  you can derive one using the common difference. For example, if you know the first term (T<sub>1</sub>) and the common difference (d), the nth term can be calculated as T<sub>n</sub> = T<sub>1</sub> + (n-1)d"
            }
          ]
        },
        "content": "\n## Arithmetic Sequences\n\n### General Term\n\nThe general term of an arithmetic sequence is denoted as T<sub>n</sub>, representing the nth term in the sequence.\n\n### Common Difference\n\nThe common difference, *d*, is the constant difference between consecutive terms in the sequence.  It's calculated as:\n\n```math\n      T<sub>n</sub>\nd =  ───────\n      T<sub>n-1</sub>\n```\n\nThis means you subtract any term from the term immediately following it to find the common difference.\n\n### Determining Any Term\n\nA general formula can be derived to determine any term in an arithmetic sequence.  This formula allows you to calculate any term directly, given the first term and the common difference.\n"
      },
      {
        "data": {
          "Title": "Linear and Quadratic Equations and Inequalities",
          "icon": "🧮",
          "flashcards": [
            {
              "front": {
                "title": "Linear Equation",
                "question": "What is a linear equation and how many solutions does it have?"
              },
              "back": "A linear equation has a variable with an exponent of 1. It has at most one solution."
            },
            {
              "front": {
                "title": "Quadratic Equation",
                "question": "What is a quadratic equation and how many solutions does it have?"
              },
              "back": "A quadratic equation has a variable with an exponent of at most 2. It has at most two solutions."
            },
            {
              "front": {
                "title": "System of Simultaneous Equations",
                "question": "How many equations are needed to solve for two unknown variables, and what are the methods to solve them?"
              },
              "back": "Two equations are required.  Methods include algebraic solutions (substitution or elimination) and graphical solutions (finding the point of intersection)."
            },
            {
              "front": {
                "title": "Literal Equations",
                "question": "What are literal equations?"
              },
              "back": "Literal equations contain several letters and variables."
            },
            {
              "front": {
                "title": "Linear Inequality",
                "question": "How is a linear inequality similar to a linear equation, and what happens when multiplying/dividing by a negative number?"
              },
              "back": "Similar to a linear equation, but uses inequality symbols (<, >, ≤, ≥).  When multiplying or dividing both sides by a negative number, the inequality sign reverses."
            }
          ]
        },
        "content": "\n## Linear and Quadratic Equations and Inequalities\n\n### Linear Equations\n\nA linear equation is an equation where the exponent of the variable is 1.  A linear equation has at most one solution.\n\n### Quadratic Equations\n\nA quadratic equation is an equation where the exponent of the variable is at most 2. A quadratic equation has at most two solutions.\n\n### Systems of Simultaneous Equations\n\nTo solve for two unknown variables, two equations are required.  These equations form a system of simultaneous equations.  These can be solved using:\n\n*   **Algebraic methods:** Substitution or elimination.\n*   **Graphical methods:** Graphing each equation and finding the coordinates of their intersection point.\n\n### Literal Equations\n\nLiteral equations contain several letters and variables.\n\n### Word Problems\n\nWord problems require translating the problem into a set of mathematical equations.\n\n### Linear Inequalities\n\nA linear inequality is similar to a linear equation, with the variable having an exponent of 1, but uses inequality symbols (<, >, ≤, ≥) instead of an equals sign.  Remember that if you multiply or divide both sides of an inequality by a negative number, you must reverse the direction of the inequality sign.\n"
      },
      {
        "data": {
          "Title": "Trigonometric Ratios and Equations",
          "icon": "📐",
          "flashcards": [
            {
              "front": {
                "title": "Sine, Cosine, Tangent",
                "question": "Define the trigonometric ratios sin θ, cos θ, and tan θ for a right-angled triangle."
              },
              "back": "In a right-angled triangle:\n\n* sin θ = opposite / hypotenuse = y / r\n* cos θ = adjacent / hypotenuse = x / r\n* tan θ = opposite / adjacent = y / x"
            },
            {
              "front": {
                "title": "Reciprocal Trigonometric Ratios",
                "question": "What are the reciprocal trigonometric ratios and how are they defined?"
              },
              "back": "The reciprocal ratios are:\n\n* cosec θ = 1 / sin θ = hypotenuse / opposite = r / y\n* sec θ = 1 / cos θ = hypotenuse / adjacent = r / x\n* cot θ = 1 / tan θ = adjacent / opposite = x / y"
            },
            {
              "front": {
                "title": "Solving Trigonometric Equations",
                "question": "How can we solve simple trigonometric equations?"
              },
              "back": "We can use the principles of solving equations and the trigonometric ratios to solve simple trigonometric equations."
            },
            {
              "front": {
                "title": "Special Angles",
                "question": "For which angles can we easily find the values of sin, cos, and tan without a calculator?"
              },
              "back": "We can easily find the values of sin, cos, and tan for 0°, 30°, 45°, 60°, and 90° without a calculator."
            },
            {
              "front": {
                "title": "Extending Trigonometric Ratios",
                "question": "How can the definitions of trigonometric ratios be extended?"
              },
              "back": "The definitions of the trigonometric ratios can be extended to any angle."
            }
          ]
        },
        "content": "\n## Trigonometric Ratios and Equations\n\n### Trigonometric Ratios\n\nWe can define three basic trigonometric ratios for right-angled triangles: sine (sin), cosine (cos), and tangent (tan).  These are defined as follows:\n\n*   ```math\n      opposite\nsin θ = ───────\n    hypotenuse\n    ```\n*   ```math\n      adjacent\ncos θ = ───────\n    hypotenuse\n    ```\n*   ```math\n      opposite\ntan θ = ───────\n     adjacent\n    ```\n\nWhere θ represents the angle.  We often use a coordinate system where the hypotenuse has length *r*, the opposite side has length *y*, and the adjacent side has length *x*.\n\n\n### Reciprocal Trigonometric Ratios\n\nEach of the basic trigonometric ratios has a reciprocal:\n\n*   cosecant (cosec) = 1 / sin θ = hypotenuse / opposite =  ```math\n                            r\n                       ─────\n                         y\n                       ```\n*   secant (sec) = 1 / cos θ = hypotenuse / adjacent = ```math\n                            r\n                       ─────\n                         x\n                       ```\n*   cotangent (cot) = 1 / tan θ = adjacent / opposite = ```math\n                             x\n                        ─────\n                         y\n                       ```\n\n### Solving Trigonometric Equations\n\nWe can use our knowledge of solving equations and trigonometric ratios to solve simple trigonometric equations.\n\n### Special Angles\n\nFor certain angles (0°, 30°, 45°, 60°, and 90°), the values of sin, cos, and tan can be easily determined without a calculator.\n\n### Extending Trigonometric Ratios\n\nThe definitions of trigonometric ratios can be extended to include any angle, not just those in right-angled triangles.\n"
      },
      {
        "data": {
          "Title": "Characteristics and Properties of Functions",
          "icon": "📈",
          "flashcards": [
            {
              "front": {
                "title": "Independent and Dependent Variables",
                "question": "What are independent and dependent variables in a function?"
              },
              "back": "The independent variable (x) is freely chosen, while the dependent variable (y) is calculated based on the x-value."
            },
            {
              "front": {
                "title": "Domain and Range",
                "question": "Define the domain and range of a function."
              },
              "back": "The domain is the set of all possible x-values. The range is the set of all resulting y-values."
            },
            {
              "front": {
                "title": "Asymptote",
                "question": "What is an asymptote?"
              },
              "back": "An asymptote is a line that a function's graph approaches but never touches."
            },
            {
              "front": {
                "title": "Linear Function",
                "question": "What is the general form of a linear function?"
              },
              "back": "y = ax + q"
            },
            {
              "front": {
                "title": "Parabolic Function",
                "question": "What is the general form of a parabolic function?"
              },
              "back": "y = ax² + q"
            },
            {
              "front": {
                "title": "Hyperbolic Function",
                "question": "What is the general form of a hyperbolic function?"
              },
              "back": "y = a/x + q"
            },
            {
              "front": {
                "title": "Exponential Function",
                "question": "What is the general form of an exponential function?"
              },
              "back": "y = abˣ + q"
            },
            {
              "front": {
                "title": "Trigonometric Functions",
                "question": "Give examples of general forms for trigonometric functions."
              },
              "back": "y = a sin θ + q\ny = a cos θ + q\ny = a tan θ + q"
            }
          ]
        },
        "content": " \n\n## Characteristics and Properties of Functions\n\n📈\n\n### Characteristics of Functions\n\n* **Independent and Dependent Variables:** The x-value is the independent variable (freely chosen), and the y-value is the dependent variable (calculated based on x).\n\n* **Domain and Range:** The domain is the set of all possible x-values for which the function is defined.  The range is the set of all resulting y-values.\n\n* **Asymptote:** An asymptote is a line that the graph of a function approaches but never touches.\n\n\n### Special Functions and Their Properties\n\nThe following outlines the general forms of several common functions:\n\n| Function Type      | General Form       |\n|----------------------|--------------------|\n| Linear              | `y = ax + q`       |\n| Parabolic           | `y = ax² + q`      |\n| Hyperbolic          | `y = a/x + q`      |\n| Exponential         | `y = abˣ + q`      |\n| Trigonometric (Sine)| `y = a sin θ + q`  |\n| Trigonometric (Cosine)| `y = a cos θ + q` |\n| Trigonometric (Tangent)| `y = a tan θ + q` |\n\n"
      },
      {
        "data": {
          "Title": "Quadrilaterals and the Mid-Point Theorem",
          "icon": "🫗",
          "flashcards": [
            {
              "front": {
                "title": "Quadrilateral",
                "question": "What is a quadrilateral?"
              },
              "back": "A closed shape with four straight line segments."
            },
            {
              "front": {
                "title": "Parallelogram",
                "question": "What are the properties of a parallelogram?"
              },
              "back": "Both pairs of opposite sides are parallel and equal in length. Both pairs of opposite angles are equal. Diagonals bisect each other."
            },
            {
              "front": {
                "title": "Rectangle",
                "question": "What are the properties of a rectangle?"
              },
              "back": "A parallelogram with all four angles equal to 90°.  Opposite sides are parallel and equal. Diagonals bisect each other and are equal in length."
            },
            {
              "front": {
                "title": "Rhombus",
                "question": "What are the properties of a rhombus?"
              },
              "back": "A parallelogram with all four sides equal in length. Opposite angles are equal. Diagonals bisect each other at 90° and bisect the opposite angles."
            },
            {
              "front": {
                "title": "Square",
                "question": "What are the properties of a square?"
              },
              "back": "A rhombus with all four angles equal to 90°.  Opposite sides are parallel. Diagonals bisect each other at 90° and are equal in length. All interior angles are 90° and diagonals bisect opposite angles into 45° angles."
            },
            {
              "front": {
                "title": "Trapezium",
                "question": "What is a trapezium?"
              },
              "back": "A quadrilateral with one pair of opposite sides parallel."
            },
            {
              "front": {
                "title": "Kite",
                "question": "What are the properties of a kite?"
              },
              "back": "A quadrilateral with two pairs of adjacent sides equal. One pair of opposite angles are equal. The diagonal between equal sides bisects the other diagonal and bisects the interior angles. Diagonals intersect at 90°."
            },
            {
              "front": {
                "title": "Mid-point Theorem",
                "question": "State the mid-point theorem."
              },
              "back": "The line joining the mid-points of two sides of a triangle is parallel to the third side and half its length."
            }
          ]
        },
        "content": "\n## Quadrilaterals and the Mid-Point Theorem\n\n### Quadrilaterals\n\nA quadrilateral is a closed shape with four straight sides.  Several special types of quadrilaterals exist, each with unique properties:\n\n* **Parallelogram:**  A quadrilateral with both pairs of opposite sides parallel.  These sides are also equal in length. Opposite angles are equal, and the diagonals bisect each other.\n\n* **Rectangle:** A parallelogram with all four angles equal to 90°.  All properties of a parallelogram apply, plus diagonals are equal in length.\n\n* **Rhombus:** A parallelogram with all four sides equal in length. All properties of a parallelogram apply, plus the diagonals bisect each other at 90° and bisect the opposite angles.\n\n* **Square:** A rhombus with all four angles equal to 90°.  It possesses all properties of a parallelogram, rhombus, and rectangle.  Diagonals are equal in length and bisect opposite angles, creating 45° angles.\n\n\n* **Trapezium:** A quadrilateral with only one pair of opposite sides parallel.\n\n* **Kite:** A quadrilateral with two pairs of adjacent sides equal. One pair of opposite angles are equal. The diagonal connecting the equal sides bisects the other diagonal and the angles it connects.  The diagonals intersect at 90°.\n\n\n### Mid-Point Theorem\n\nThe mid-point theorem states that the line segment connecting the midpoints of two sides of a triangle is parallel to the third side and is half its length.\n"
      },
      {
        "data": {
          "Title": "Analytical Geometry",
          "icon": "📍",
          "flashcards": [
            {
              "front": {
                "title": "Point",
                "question": "How is a point represented?"
              },
              "back": "A point is an ordered pair of numbers written as (x, y)."
            },
            {
              "front": {
                "title": "Distance Formula",
                "question": "What is the formula for calculating the distance between two points?"
              },
              "back": "```math\nd = √((x₁ - x₂)² + (y₁ - y₂)²)\n```"
            },
            {
              "front": {
                "title": "Gradient",
                "question": "How is the gradient of a line calculated?"
              },
              "back": "The gradient (m) is the ratio of vertical change to horizontal change between two points:\n```math\nm = (y₂ - y₁) / (x₂ - x₁)\n```"
            },
            {
              "front": {
                "title": "Equation of a Straight Line",
                "question": "What is the standard form of the equation of a straight line?"
              },
              "back": "y = mx + c, where m is the gradient and c is the y-intercept."
            },
            {
              "front": {
                "title": "Equation of a Straight Line (Two-Point Form)",
                "question": "What is the two-point form of the equation of a straight line?"
              },
              "back": "```math\n(y - y₁) / (x - x₁) = (y₂ - y₁) / (x₂ - x₁)\n```"
            },
            {
              "front": {
                "title": "Parallel Lines",
                "question": "What is the relationship between the gradients of parallel lines?"
              },
              "back": "Parallel lines have equal gradients."
            },
            {
              "front": {
                "title": "Perpendicular Lines",
                "question": "What is the relationship between the gradients of perpendicular lines?"
              },
              "back": "The product of the gradients of perpendicular lines is -1."
            },
            {
              "front": {
                "title": "Horizontal Line Gradient",
                "question": "What is the gradient of a horizontal line?"
              },
              "back": "The gradient of a horizontal line is 0."
            },
            {
              "front": {
                "title": "Vertical Line Gradient",
                "question": "What is the gradient of a vertical line?"
              },
              "back": "The gradient of a vertical line is undefined."
            },
            {
              "front": {
                "title": "Midpoint Formula",
                "question": "What is the formula for finding the midpoint between two points?"
              },
              "back": "```math\nM(x, y) = ((x₁ + x₂) / 2, (y₁ + y₂) / 2)\n```"
            }
          ]
        },
        "content": "\n## Analytical Geometry\n\n### Points and Distance\n\nA point is represented by an ordered pair of numbers (x, y).  The distance (d) between two points (x₁, y₁) and (x₂, y₂) is calculated using the distance formula:\n\n```math\nd = √((x₁ - x₂)² + (y₁ - y₂)² )\n```\n\n### Gradient and Straight Lines\n\nThe gradient (m) of a line represents its steepness and is calculated as:\n\n```math\nm = (y₂ - y₁) / (x₂ - x₁)\n```\n\nA straight line has a constant gradient between any two points.  The equation of a straight line can be written in the standard form:\n\ny = mx + c\n\nwhere m is the gradient and c is the y-intercept.  Alternatively, the two-point form can be used:\n\n```math\n(y - y₁) / (x - x₁) = (y₂ - y₁) / (x₂ - x₁)\n```\n\n### Parallel and Perpendicular Lines\n\nParallel lines have equal gradients.  For perpendicular lines, the product of their gradients is -1.\n\nHorizontal lines have a gradient of 0, while the gradient of a vertical line is undefined.\n\n### Midpoint\n\nThe midpoint M(x, y) between two points (x₁, y₁) and (x₂, y₂) is calculated using:\n\n```math\nM(x, y) = ((x₁ + x₂) / 2, (y₁ + y₂) / 2)\n```\n"
      },
      {
        "data": {
          "Title": "Simple and Compound Interest",
          "icon": "💰",
          "flashcards": [
            {
              "front": {
                "title": "Simple Interest",
                "question": "What is the formula for calculating simple interest?"
              },
              "back": "The formula for simple interest is:\n```math\n A = P(1 + in)\n```\nWhere:\n* A = accumulated amount\n* P = principal amount\n* i = interest rate (as a decimal)\n* n = number of years"
            },
            {
              "front": {
                "title": "Compound Interest",
                "question": "How is compound interest calculated?"
              },
              "back": "The formula for compound interest is:\n```math\n A = P(1 + i)^n\n```\nWhere:\n* A = accumulated amount\n* P = principal amount\n* i = interest rate (as a decimal)\n* n = number of years"
            },
            {
              "front": {
                "title": "Hire Purchase Repayments",
                "question": "How are hire purchase loan repayments calculated?"
              },
              "back": "Hire purchase loan repayments are calculated using the simple interest formula on the cash price minus the deposit.  Monthly repayments are found by dividing the accumulated amount by the number of months."
            },
            {
              "front": {
                "title": "Population Growth/Inflation",
                "question": "What formula is used to calculate population growth or inflation?"
              },
              "back": "Population growth and inflation are calculated using the compound interest formula."
            },
            {
              "front": {
                "title": "Foreign Exchange Rate",
                "question": "What is a foreign exchange rate?"
              },
              "back": "A foreign exchange rate is the price of one currency in terms of another."
            }
          ]
        },
        "content": "\n# Simple and Compound Interest\n\n## Types of Interest Rates\n\nThere are two main types of interest rates:\n\n* **Simple Interest:**  Calculated only on the principal amount.\n* **Compound Interest:** Calculated on the principal amount plus accumulated interest.\n\n### Formulas\n\n* **Simple Interest:**\n\n```math\n      A = P(1 + in)\n```\n\nWhere:\n\n* A = accumulated amount\n* P = principal amount\n* i = interest rate (decimal)\n* n = number of years\n\n\n* **Compound Interest:**\n\n```math\n      A = P(1 + i)^n\n```\n\nWhere:\n\n* A = accumulated amount\n* P = principal amount\n* i = interest rate (decimal)\n* n = number of years\n\n\n## Applications\n\n* **Hire Purchase Loan Repayments:**  These are calculated using the simple interest formula applied to the cash price less any deposit. Monthly repayments are then determined by dividing the total accumulated amount by the number of months in the repayment period.\n\n* **Population Growth and Inflation:**  These are calculated using the compound interest formula.\n\n\n## Foreign Exchange Rates\n\nA foreign exchange rate is the value of one currency in relation to another.\n"
      },
      {
        "data": {
          "Title": "Five Number Summary and Box-and-Whisker Plots",
          "icon": "📊",
          "flashcards": [
            {
              "front": {
                "title": "Five Number Summary",
                "question": "What are the five values in a five number summary?"
              },
              "back": "Minimum, First Quartile (Q1), Median (Q2), Third Quartile (Q3), Maximum"
            },
            {
              "front": {
                "title": "Box-and-Whisker Plot",
                "question": "What does a box-and-whisker plot visually represent?"
              },
              "back": "The five number summary: minimum, Q1, median, Q3, and maximum.  The box represents the interquartile range (IQR = Q3 - Q1), and the whiskers extend to the minimum and maximum values."
            },
            {
              "front": {
                "title": "Calculating Quartiles",
                "question": "How do you calculate the quartiles in a data set?"
              },
              "back": "Sort the data.  The median is Q2. Q1 is the median of the lower half of the data, and Q3 is the median of the upper half. If the number of data points is even, the median is the average of the two middle values. For quartiles, use the average of the two surrounding values if necessary."
            },
            {
              "front": {
                "title": "Interquartile Range (IQR)",
                "question": "What is the interquartile range?"
              },
              "back": "The difference between the third quartile (Q3) and the first quartile (Q1): IQR = Q3 - Q1"
            }
          ]
        },
        "content": "\n# Five Number Summary and Box-and-Whisker Plots\n\nThe five number summary is a concise way to summarize a dataset.  It consists of five key values:\n\n* **Minimum:** The smallest value in the dataset.\n* **First Quartile (Q1):** The value that separates the bottom 25% of the data from the top 75%.\n* **Median (Q2):** The middle value of the dataset (or the average of the two middle values if the dataset has an even number of values).\n* **Third Quartile (Q3):** The value that separates the bottom 75% of the data from the top 25%.\n* **Maximum:** The largest value in the dataset.\n\nThese five values can be visually represented using a box-and-whisker plot.  The box represents the interquartile range (IQR), which is the difference between Q3 and Q1 (IQR = Q3 - Q1).  A line inside the box indicates the median.  Whiskers extend from the box to the minimum and maximum values.\n\n\n**Worked Example:**\n\nLet's find the five number summary for the dataset: {1.25, 1.5, 2.5, 2.5, 3.1, 3.2, 4.1, 4.25, 4.75, 4.8, 4.95, 5.1}\n\n1. **Sort the data:** The data is already sorted.\n2. **Minimum:** 1.25\n3. **Maximum:** 5.1\n4. **Median (Q2):**  There are 12 values, so the median is the average of the 6th and 7th values: (3.2 + 4.1) / 2 = 3.65\n5. **First Quartile (Q1):** The median of the lower half (1.25, 1.5, 2.5, 2.5, 3.1, 3.2): (2.5 + 2.5) / 2 = 2.5\n6. **Third Quartile (Q3):** The median of the upper half (4.1, 4.25, 4.75, 4.8, 4.95, 5.1): (4.75 + 4.8) / 2 = 4.775\n\nTherefore, the five number summary is: Minimum = 1.25, Q1 = 2.5, Median = 3.65, Q3 = 4.775, Maximum = 5.1\n\n\n**Additional Examples:**\n\nSeveral additional examples of calculating five-number summaries and constructing box-and-whisker plots from different datasets are omitted for brevity.  The process remains consistent: sort the data, find the minimum, maximum, median, Q1, and Q3.  Then, represent these values graphically in a box-and-whisker plot.\n"
      }
    ],
    "5": [
      {
        "data": {
          "Title": "Quadratic Equations and their Roots",
          "icon": "二次方程式",
          "flashcards": [
            {
              "front": {
                "title": "Zero Product Law",
                "question": "What does the zero product law state?"
              },
              "back": "If a × b = 0, then a = 0 or b = 0 (or both)."
            },
            {
              "front": {
                "title": "Quadratic Formula",
                "question": "What is the quadratic formula?"
              },
              "back": "```math\nx =  ─────\n     -b ± √(b² - 4ac)\n       2a\n```"
            },
            {
              "front": {
                "title": "Discriminant",
                "question": "What is the discriminant and what does it tell us about the roots of a quadratic equation?"
              },
              "back": "The discriminant (Δ) is b² - 4ac.  \n* Δ < 0: Non-real roots\n* Δ = 0: Real and equal roots\n* Δ > 0: Real and unequal roots (rational if Δ is a perfect square, irrational otherwise)."
            },
            {
              "front": {
                "title": "Completing the Square",
                "question": "How do you complete the square to solve a quadratic equation?"
              },
              "back": "Rewrite the quadratic expression in the form a(x + p)² + q.  This involves finding the values of 'p' and 'q' that make the expression equivalent to the original."
            },
            {
              "front": {
                "title": "Standard Form of a Quadratic Equation",
                "question": "What is the standard form of a quadratic equation?"
              },
              "back": "ax² + bx + c = 0, where a, b, and c are constants and a ≠ 0."
            },
            {
              "front": {
                "title": "Nature of Roots based on Discriminant",
                "question": "What does the sign of the discriminant tell us about the nature of the roots?"
              },
              "back": "Positive discriminant: Two distinct real roots.\nZero discriminant: One real root (repeated).\nNegative discriminant: Two complex roots (non-real)."
            },
            {
              "front": {
                "title": "Finding a Quadratic Equation from its Roots",
                "question": "How can you find a quadratic equation given its roots?"
              },
              "back": "If the roots are α and β, then the equation is (x - α)(x - β) = 0.  Expand and simplify to standard form."
            }
          ]
        },
        "content": "\n## Quadratic Equations and their Roots\n\n### Key Concepts\n\n* **Zero Product Law:** If the product of two factors is zero, then at least one of the factors must be zero.  This is crucial for solving quadratic equations that can be factored.\n\n* **Quadratic Formula:**  This formula provides the solutions (roots) for any quadratic equation in standard form (ax² + bx + c = 0).\n\n```math\n     -b ± √(b² - 4ac)\nx =  ─────────────\n           2a\n```\n\n* **Discriminant (Δ):** The discriminant, Δ = b² - 4ac, determines the nature of the roots of a quadratic equation.\n\n    * Δ > 0: Two distinct real roots.  These roots are rational if Δ is a perfect square; otherwise, they are irrational.\n    * Δ = 0: One real root (a repeated root).\n    * Δ < 0: Two complex (non-real) roots.\n\n* **Completing the Square:**  A technique to rewrite a quadratic expression into a perfect square trinomial plus a constant, useful for solving equations and finding the vertex of a parabola.\n\n\n* **Standard Form:** The standard form of a quadratic equation is ax² + bx + c = 0, where a, b, and c are constants and a ≠ 0.\n\n\n### Solving Quadratic Equations\n\nQuadratic equations can be solved using various methods, including:\n\n* **Factoring:**  If the quadratic expression can be easily factored, set each factor to zero and solve for x.\n\n* **Quadratic Formula:**  Use the quadratic formula when factoring is difficult or impossible.\n\n* **Completing the Square:**  This method can be useful for solving equations and also for transforming the equation to find properties of the parabola represented by the equation.\n\n\n### Applications\n\nUnderstanding quadratic equations and their properties is essential in various mathematical and scientific applications, including:\n\n* Modeling projectile motion\n* Analyzing parabolic curves\n* Solving optimization problems\n\n\n"
      },
      {
        "data": {
          "Title": "Descriptive Statistics",
          "icon": "📊",
          "flashcards": [
            {
              "front": {
                "title": "Histogram",
                "question": "What does a histogram visually represent?"
              },
              "back": "A histogram visualizes the frequency of different events. Each rectangle represents an event, and its height corresponds to the event's frequency."
            },
            {
              "front": {
                "title": "Frequency Polygon",
                "question": "How does a frequency polygon relate to a histogram?"
              },
              "back": "A frequency polygon represents the same data as a histogram but uses lines and points instead of rectangles.  It connects the midpoints of the tops of the histogram's rectangles."
            },
            {
              "front": {
                "title": "Ogive (Cumulative Histogram)",
                "question": "What does an ogive show?"
              },
              "back": "An ogive displays the cumulative frequency—the total number of occurrences of a value or any value less than it.  The first count is always zero, and the last is the sum of all counts."
            },
            {
              "front": {
                "title": "Variance",
                "question": "What is the formula for variance?"
              },
              "back": "```math\nσ² = 1/n * Σᵢ₌₁ⁿ (xᵢ - x̄)²\n```\nWhere: σ² is the variance, n is the number of data points, xᵢ represents individual data points, and x̄ is the mean."
            },
            {
              "front": {
                "title": "Standard Deviation",
                "question": "How is standard deviation related to variance?"
              },
              "back": "The standard deviation (σ) is the square root of the variance: \n```math\nσ = √(1/n * Σᵢ₌₁ⁿ (xᵢ - x̄)²)\n```\nIt's measured in the same units as the data, unlike variance."
            },
            {
              "front": {
                "title": "Symmetric Distribution",
                "question": "Describe the characteristics of a symmetric distribution."
              },
              "back": "In a symmetric distribution, the mean is approximately equal to the median, and the tails of the distribution are balanced."
            },
            {
              "front": {
                "title": "Right (Positively) Skewed Distribution",
                "question": "What are the characteristics of a right-skewed distribution?"
              },
              "back": "In a right-skewed distribution:\n* The mean is greater than the median.\n* The right tail is longer than the left tail.\n* The median is closer to the first quartile than the third."
            },
            {
              "front": {
                "title": "Left (Negatively) Skewed Distribution",
                "question": "What are the characteristics of a left-skewed distribution?"
              },
              "back": "In a left-skewed distribution:\n* The mean is less than the median.\n* The left tail is longer than the right tail.\n* The median is closer to the third quartile than the first."
            },
            {
              "front": {
                "title": "Outlier",
                "question": "What is an outlier?"
              },
              "back": "An outlier is a data point that significantly differs from the rest of the data."
            }
          ]
        },
        "content": "\n## Descriptive Statistics\n\n### Data Visualization\n\n* **Histograms:** Visualize the frequency of events. Each bar represents an event, and its height shows the frequency.\n* **Frequency Polygons:** Similar to histograms, but use lines and points to connect the midpoints of the histogram bars.\n* **Ogives (Cumulative Histograms):** Show the cumulative frequency—the total count of occurrences up to a given value.  The first value is always zero, and the last is the total count.\n\n### Measures of Dispersion\n\n* **Variance (σ²):** Measures the spread of data around the mean.  Calculated as:\n   ```math\n   σ² = 1/n * Σᵢ₌₁ⁿ (xᵢ - x̄)²\n   ```\n* **Standard Deviation (σ):** The square root of the variance.  Measured in the same units as the data.\n\n### Data Distribution Shapes\n\n* **Symmetric Distribution:** Mean ≈ Median; tails are balanced.\n* **Right (Positively) Skewed Distribution:** Mean > Median; longer right tail; median closer to the first quartile.\n* **Left (Negatively) Skewed Distribution:** Mean < Median; longer left tail; median closer to the third quartile.\n\n### Outliers\n\nAn outlier is a data point significantly distant from the rest of the data.\n"
      },
      {
        "data": {
          "Title": "Analytical Geometry Formulas",
          "icon": "📐",
          "flashcards": [
            {
              "front": {
                "title": "Distance Between Two Points",
                "question": "How do you calculate the distance between two points (x₁, y₁) and (x₂, y₂)? "
              },
              "back": "The distance, *d*, is calculated using the formula:\n```math\n     √((x₂ - x₁)² + (y₂ - y₁)²) \n```"
            },
            {
              "front": {
                "title": "Gradient of a Line",
                "question": "What is the formula for the gradient (*m*) of a line passing through two points (x₁, y₁) and (x₂, y₂)? "
              },
              "back": "The gradient is given by:\n```math\n     y₂ - y₁\n  ───────\n     x₂ - x₁\n```"
            },
            {
              "front": {
                "title": "Midpoint of a Line Segment",
                "question": "How do you find the midpoint of a line segment connecting (x₁, y₁) and (x₂, y₂)? "
              },
              "back": "The midpoint, M(x, y), is:\n```math\n     x₁ + x₂     y₁ + y₂\n  (───────, ───────)\n       2         2\n```"
            },
            {
              "front": {
                "title": "Parallel Lines",
                "question": "What is the relationship between the gradients of parallel lines?"
              },
              "back": "Parallel lines have equal gradients:  m₁ = m₂"
            },
            {
              "front": {
                "title": "Perpendicular Lines",
                "question": "How are the gradients of perpendicular lines related?"
              },
              "back": "For perpendicular lines, the product of their gradients is -1: m₁ * m₂ = -1"
            },
            {
              "front": {
                "title": "General Form of a Straight Line",
                "question": "What is the general form of the equation of a straight line?"
              },
              "back": "The general form is: ax + by + c = 0"
            },
            {
              "front": {
                "title": "Two-Point Form of a Straight Line",
                "question": "Give the two-point form of a straight line equation."
              },
              "back": "The equation is:\n```math\n     y - y₁     y₂ - y₁\n  ─────── = ───────\n     x - x₁     x₂ - x₁\n```"
            },
            {
              "front": {
                "title": "Gradient-Point Form of a Straight Line",
                "question": "What is the gradient-point form of a straight line equation?"
              },
              "back": "The equation is: y - y₁ = m(x - x₁)"
            },
            {
              "front": {
                "title": "Gradient-Intercept Form of a Straight Line",
                "question": "What is the gradient-intercept (standard) form of a straight line equation?"
              },
              "back": "The equation is: y = mx + c"
            },
            {
              "front": {
                "title": "Angle of Inclination",
                "question": "How is the angle of inclination (θ) of a line related to its gradient?"
              },
              "back": "The gradient, *m*, is the tangent of the angle of inclination: m = tan θ"
            }
          ]
        },
        "content": "\n## Analytical Geometry Formulas\n\nThis document summarizes key formulas in analytical geometry.\n\n### Lines\n\n* **Distance between two points:**  The distance (*d*) between points (x₁, y₁) and (x₂, y₂) is calculated as:\n\n```math\n     √((x₂ - x₁)² + (y₂ - y₁)²)\n```\n\n* **Gradient of a line:** The gradient (*m*) of a line passing through points (x₁, y₁) and (x₂, y₂) is:\n\n```math\n     y₂ - y₁\n  ───────\n     x₂ - x₁\n```\n\n* **Midpoint of a line segment:** The midpoint M(x, y) of the line segment connecting (x₁, y₁) and (x₂, y₂) is:\n\n```math\n     x₁ + x₂     y₁ + y₂\n  (───────, ───────)\n       2         2\n```\n\n* **Parallel lines:** Parallel lines have equal gradients (m₁ = m₂).\n\n* **Perpendicular lines:**  The product of the gradients of perpendicular lines is -1 (m₁ * m₂ = -1).\n\n### Equations of a Straight Line\n\n* **General form:** ax + by + c = 0\n\n* **Two-point form:**\n\n```math\n     y - y₁     y₂ - y₁\n  ─────── = ───────\n     x - x₁     x₂ - x₁\n```\n\n* **Gradient-point form:** y - y₁ = m(x - x₁)\n\n* **Gradient-intercept form (standard form):** y = mx + c\n\n* **Angle of inclination:** The angle of inclination (θ) is the angle between the line and the positive x-axis.  The gradient is given by m = tan θ.\n"
      },
      {
        "data": {
          "Title": "Grade 11 Functions Summary",
          "icon": "📈",
          "flashcards": [
            {
              "front": {
                "title": "Parabolic Functions",
                "question": "What are the key features of a parabolic function?"
              },
              "back": "Standard form: `y = ax² + bx + c`\n* y-intercept: `(0; c)`\n* x-intercept: `x = (-b ± √(b² - 4ac)) / 2a`\n* Turning point: `(-b/2a; -b²/4a + c)`\n* Axis of symmetry: `x = -b/2a`\nCompleted square form: `y = a(x + p)² + q`\n* Turning point: `(-p; q)`\n* `p > 0`: horizontal shift left\n* `p < 0`: horizontal shift right\n* `q > 0`: vertical shift up\n* `q < 0`: vertical shift down"
            },
            {
              "front": {
                "title": "Average Gradient",
                "question": "How do you calculate the average gradient?"
              },
              "back": "Average gradient = `(y₂ - y₁) / (x₂ - x₁)`"
            },
            {
              "front": {
                "title": "Hyperbolic Functions",
                "question": "Describe the key features of a hyperbolic function and its shifted form."
              },
              "back": "Standard form: `y = k/x`\n* `k > 0`: first and third quadrants\n* `k < 0`: second and fourth quadrants\nShifted form: `y = k/(x + p) + q`\n* `p > 0`: horizontal shift left\n* `p < 0`: horizontal shift right\n* `q > 0`: vertical shift up\n* `q < 0`: vertical shift down\n* Asymptotes: `x = -p` and `y = q`"
            },
            {
              "front": {
                "title": "Exponential Functions",
                "question": "Explain the behavior of exponential functions and their shifted forms."
              },
              "back": "Standard form: `y = abˣ`\n* `a > 0`: above x-axis\n* `a < 0`: below x-axis\n* `b > 1`: increasing function if `a > 0`; decreasing if `a < 0`\n* `0 < b < 1`: decreasing function if `a > 0`; increasing if `a < 0`\nShifted form: `y = ab^(x + p) + q`\n* `p > 0`: horizontal shift left\n* `p < 0`: horizontal shift right\n* `q > 0`: vertical shift up\n* `q < 0`: vertical shift down\n* Asymptote: `y = q`"
            },
            {
              "front": {
                "title": "Sine Functions",
                "question": "What are the key features of a shifted sine function?"
              },
              "back": "Shifted form: `y = a sin(kθ + p) + q`\n* Period = `360°/|k|`\n* `k > 1` or `k < -1`: period decreases\n* `0 < k < 1` or `-1 < k < 0`: period increases\n* `p > 0`: horizontal shift left\n* `p < 0`: horizontal shift right\n* `q > 0`: vertical shift up\n* `q < 0`: vertical shift down\n* `sin(-θ) = -sin θ`"
            },
            {
              "front": {
                "title": "Cosine Functions",
                "question": "What are the key features of a shifted cosine function?"
              },
              "back": "Shifted form: `y = a cos(kθ + p) + q`\n* Period = `360°/|k|`\n* `k > 1` or `k < -1`: period decreases\n* `0 < k < 1` or `-1 < k < 0`: period increases\n* `p > 0`: horizontal shift left\n* `p < 0`: horizontal shift right\n* `q > 0`: vertical shift up\n* `q < 0`: vertical shift down\n* `cos(-θ) = cos θ`"
            },
            {
              "front": {
                "title": "Tangent Functions",
                "question": "What are the key features of a shifted tangent function?"
              },
              "back": "Shifted form: `y = a tan(kθ + p) + q`\n* Period = `180°/|k|`\n* `k > 1` or `k < -1`: period decreases\n* `0 < k < 1` or `-1 < k < 0`: period increases\n* `p > 0`: horizontal shift left\n* `p < 0`: horizontal shift right\n* `q > 0`: vertical shift up\n* `q < 0`: vertical shift down\n* `tan(-θ) = -tan θ`\n* Asymptotes: `(90° - p)/k ± 180°n/k`, `n ∈ ℤ`"
            }
          ]
        },
        "content": "\n## Grade 11 Functions Summary\n\n### Parabolic Functions\n\nThe standard form of a parabolic function is:  `y = ax² + bx + c`\n\n* **y-intercept:**  `(0; c)`\n* **x-intercept:**  `x = (-b ± √(b² - 4ac)) / 2a`\n* **Turning point:** `(-b/2a; -b²/4a + c)`\n* **Axis of symmetry:** `x = -b/2a`\n\nThe completed square form is: `y = a(x + p)² + q`\n\n* **Turning point:** `(-p; q)`\n* `p > 0`: horizontal shift to the left\n* `p < 0`: horizontal shift to the right\n* `q > 0`: vertical shift upwards\n* `q < 0`: vertical shift downwards\n\n\n### Average Gradient\n\nThe average gradient between two points (x₁, y₁) and (x₂, y₂) is calculated as:\n\n`(y₂ - y₁) / (x₂ - x₁)`\n\n\n### Hyperbolic Functions\n\nThe standard form of a hyperbolic function is: `y = k/x`\n\n* `k > 0`: The graph is in the first and third quadrants.\n* `k < 0`: The graph is in the second and fourth quadrants.\n\nThe shifted form is: `y = k/(x + p) + q`\n\n* `p > 0`: horizontal shift to the left\n* `p < 0`: horizontal shift to the right\n* `q > 0`: vertical shift upwards\n* `q < 0`: vertical shift downwards\n* Asymptotes: `x = -p` and `y = q`\n\n\n### Exponential Functions\n\nThe standard form of an exponential function is: `y = abˣ`\n\n* `a > 0`: The graph is above the x-axis.\n* `a < 0`: The graph is below the x-axis.\n* `b > 1`: Increasing function if `a > 0`; decreasing if `a < 0`.\n* `0 < b < 1`: Decreasing function if `a > 0`; increasing if `a < 0`.\n\nThe shifted form is: `y = ab^(x + p) + q`\n\n* `p > 0`: horizontal shift to the left\n* `p < 0`: horizontal shift to the right\n* `q > 0`: vertical shift upwards\n* `q < 0`: vertical shift downwards\n* Asymptote: `y = q`\n\n\n### Trigonometric Functions\n\n**Sine Functions:**\n\nShifted form: `y = a sin(kθ + p) + q`\n\n* Period = `360°/|k|`\n* `k > 1` or `k < -1`: period decreases\n* `0 < k < 1` or `-1 < k < 0`: period increases\n* `p > 0`: horizontal shift to the left\n* `p < 0`: horizontal shift to the right\n* `q > 0`: vertical shift upwards\n* `q < 0`: vertical shift downwards\n* `sin(-θ) = -sin θ`\n\n**Cosine Functions:**\n\nShifted form: `y = a cos(kθ + p) + q`\n\n* Period = `360°/|k|`\n* `k > 1` or `k < -1`: period decreases\n* `0 < k < 1` or `-1 < k < 0`: period increases\n* `p > 0`: horizontal shift to the left\n* `p < 0`: horizontal shift to the right\n* `q > 0`: vertical shift upwards\n* `q < 0`: vertical shift downwards\n* `cos(-θ) = cos θ`\n\n**Tangent Functions:**\n\nShifted form: `y = a tan(kθ + p) + q`\n\n* Period = `180°/|k|`\n* `k > 1` or `k < -1`: period decreases\n* `0 < k < 1` or `-1 < k < 0`: period increases\n* `p > 0`: horizontal shift to the left\n* `p < 0`: horizontal shift to the right\n* `q > 0`: vertical shift upwards\n* `q < 0`: vertical shift downwards\n* `tan(-θ) = -tan θ`\n* Asymptotes: `(90° - p)/k ± 180°n/k`, `n ∈ ℤ`\n\n"
      },
      {
        "data": {
          "Title": "Trigonometric Identities and Rules",
          "icon": "📐",
          "flashcards": [
            {
              "front": {
                "title": "Square Identity",
                "question": "What is the Pythagorean identity relating sine and cosine?"
              },
              "back": "```math\ncos²θ + sin²θ = 1\n```"
            },
            {
              "front": {
                "title": "Quotient Identity",
                "question": "How is tangent defined in terms of sine and cosine?"
              },
              "back": "```math\ntanθ = sinθ / cosθ\n```"
            },
            {
              "front": {
                "title": "Negative Angle Identities (Sine)",
                "question": "How does the sine of a negative angle relate to the sine of the positive angle?"
              },
              "back": "```math\nsin(-θ) = -sinθ\n```"
            },
            {
              "front": {
                "title": "Negative Angle Identities (Cosine)",
                "question": "How does the cosine of a negative angle relate to the cosine of the positive angle?"
              },
              "back": "```math\ncos(-θ) = cosθ\n```"
            },
            {
              "front": {
                "title": "Periodicity Identity (Sine)",
                "question": "What is the period of the sine function?"
              },
              "back": "```math\nsin(θ ± 360°) = sinθ\n```"
            },
            {
              "front": {
                "title": "Periodicity Identity (Cosine)",
                "question": "What is the period of the cosine function?"
              },
              "back": "```math\ncos(θ ± 360°) = cosθ\n```"
            },
            {
              "front": {
                "title": "Cofunction Identity (Sine and Cosine)",
                "question": "How are sine and cosine related as cofunctions?"
              },
              "back": "```math\nsin(90° - θ) = cosθ\ncos(90° - θ) = sinθ\n```"
            },
            {
              "front": {
                "title": "Sine Rule",
                "question": "State the sine rule for a triangle."
              },
              "back": "```math\nsinA / a = sinB / b = sinC / c\n```"
            },
            {
              "front": {
                "title": "Area Rule",
                "question": "Give the formula for the area of a triangle using two sides and the included angle."
              },
              "back": "Area of triangle ABC = 1/2 * b * c * sinA  (or similar variations using other sides and angles)"
            },
            {
              "front": {
                "title": "Cosine Rule",
                "question": "State the cosine rule for a triangle."
              },
              "back": "```math\na² = b² + c² - 2bc cosA\n``` (and similar variations for b² and c²)"
            },
            {
              "front": {
                "title": "General Solution for sinθ = x",
                "question": "What is the general solution for θ when sinθ = x?"
              },
              "back": "θ = sin⁻¹x + k * 360° or θ = (180° - sin⁻¹x) + k * 360°, where k ∈ ℤ"
            },
            {
              "front": {
                "title": "General Solution for cosθ = x",
                "question": "What is the general solution for θ when cosθ = x?"
              },
              "back": "θ = cos⁻¹x + k * 360° or θ = (360° - cos⁻¹x) + k * 360°, where k ∈ ℤ"
            },
            {
              "front": {
                "title": "General Solution for tanθ = x",
                "question": "What is the general solution for θ when tanθ = x?"
              },
              "back": "θ = tan⁻¹x + k * 180°, where k ∈ ℤ"
            }
          ]
        },
        "content": "\n## Trigonometric Identities and Rules\n\n### Basic Identities\n\n* **Square Identity:**  ```math\\ncos²θ + sin²θ = 1\\n```\n* **Quotient Identity:** ```math\\ntanθ = sinθ / cosθ\\n```\n\n### Angle Relationships\n\n* **Negative Angle Identities:**\n    * ```math\\nsin(-θ) = -sinθ\\n```\n    * ```math\\ncos(-θ) = cosθ\\n```\n* **Periodicity Identities:**\n    * ```math\\nsin(θ ± 360°) = sinθ\\n```\n    * ```math\\ncos(θ ± 360°) = cosθ\\n```\n* **Cofunction Identities:**\n    * ```math\\nsin(90° - θ) = cosθ\\n```\n    * ```math\\ncos(90° - θ) = sinθ\\n```\n\n\n### Triangle Rules\n\n* **Sine Rule:** ```math\\nsinA / a = sinB / b = sinC / c\\n```\n* **Area Rule:** Area of triangle ABC = 1/2 * b * c * sinA (or similar variations using other sides and angles)\n* **Cosine Rule:** ```math\\na² = b² + c² - 2bc cosA\\n``` (and similar variations for b² and c²)\n\n### General Solutions\n\nFinding all possible solutions for θ given a trigonometric equation:\n\n* **If sinθ = x:** θ = sin⁻¹x + k * 360° or θ = (180° - sin⁻¹x) + k * 360°, where k ∈ ℤ\n* **If cosθ = x:** θ = cos⁻¹x + k * 360° or θ = (360° - cos⁻¹x) + k * 360°, where k ∈ ℤ\n* **If tanθ = x:** θ = tan⁻¹x + k * 180°, where k ∈ ℤ\n\n\n### Choosing the Right Rule\n\n* **Area Rule:** Use when no perpendicular height is given.\n* **Sine Rule:** Use when no right angle is given, and either two sides and an angle (not the included angle) or two angles and a side are given.\n* **Cosine Rule:** Use when no right angle is given, and either two sides and the included angle are given or three sides are given.\n\n"
      },
      {
        "data": {
          "Title": "Area, Surface Area, and Volume Formulas",
          "icon": "📐",
          "flashcards": [
            {
              "front": {
                "title": "Area of a Square",
                "question": "What is the formula for the area of a square?"
              },
              "back": "Area = s² where s is the side length"
            },
            {
              "front": {
                "title": "Area of a Rectangle",
                "question": "How do you calculate the area of a rectangle?"
              },
              "back": "Area = b × h where b is the base and h is the height"
            },
            {
              "front": {
                "title": "Area of a Triangle",
                "question": "What's the formula for the area of a triangle?"
              },
              "back": "Area = ½ × b × h where b is the base and h is the height"
            },
            {
              "front": {
                "title": "Area of a Trapezium",
                "question": "How do you find the area of a trapezium?"
              },
              "back": "Area = ½ × (a + b) × h where a and b are the parallel sides and h is the height"
            },
            {
              "front": {
                "title": "Area of a Parallelogram",
                "question": "What is the area formula for a parallelogram?"
              },
              "back": "Area = b × h where b is the base and h is the height"
            },
            {
              "front": {
                "title": "Area of a Circle",
                "question": "What's the formula for the area of a circle?"
              },
              "back": "Area = πr² where r is the radius"
            },
            {
              "front": {
                "title": "Volume of a Rectangular Prism",
                "question": "How do you calculate the volume of a rectangular prism?"
              },
              "back": "Volume = l × b × h where l is the length, b is the breadth, and h is the height"
            },
            {
              "front": {
                "title": "Volume of a Triangular Prism",
                "question": "What's the formula for the volume of a triangular prism?"
              },
              "back": "Volume = (½ × b × h) × H where b and h are the base and height of the triangle, and H is the prism's height"
            },
            {
              "front": {
                "title": "Volume of a Cube",
                "question": "How do you find the volume of a cube?"
              },
              "back": "Volume = s³ where s is the side length"
            },
            {
              "front": {
                "title": "Volume of a Cylinder",
                "question": "What's the formula for the volume of a cylinder?"
              },
              "back": "Volume = πr² × h where r is the radius and h is the height"
            },
            {
              "front": {
                "title": "Surface Area of a Square Pyramid",
                "question": "What is the surface area formula for a square pyramid?"
              },
              "back": "Surface Area = b(b + 2h) where b is the base side length and h is the slant height"
            },
            {
              "front": {
                "title": "Surface Area of a Triangular Pyramid",
                "question": "How do you calculate the surface area of a triangular pyramid?"
              },
              "back": "Surface Area = ½b(hb + 3hs) where b is the base length, hb is the base height, and hs is the slant height"
            },
            {
              "front": {
                "title": "Surface Area of a Right Cone",
                "question": "What's the surface area formula for a right cone?"
              },
              "back": "Surface Area = πr(r + hs) where r is the radius and hs is the slant height"
            },
            {
              "front": {
                "title": "Surface Area of a Sphere",
                "question": "How do you find the surface area of a sphere?"
              },
              "back": "Surface Area = 4πr² where r is the radius"
            },
            {
              "front": {
                "title": "Volume of a Square Pyramid",
                "question": "What is the volume formula for a square pyramid?"
              },
              "back": "Volume = (⅓) × b² × H where b is the base side length and H is the height"
            },
            {
              "front": {
                "title": "Volume of a Triangular Pyramid",
                "question": "How do you calculate the volume of a triangular pyramid?"
              },
              "back": "Volume = (⅓) × (½ × b × h) × H where b and h are the base and height of the triangle, and H is the pyramid's height"
            },
            {
              "front": {
                "title": "Volume of a Right Cone",
                "question": "What's the volume formula for a right cone?"
              },
              "back": "Volume = (⅓) × πr² × H where r is the radius and H is the height"
            },
            {
              "front": {
                "title": "Volume of a Sphere",
                "question": "How do you find the volume of a sphere?"
              },
              "back": "Volume = (4/3)πr³ where r is the radius"
            }
          ]
        },
        "content": "\n## Area, Surface Area, and Volume Formulas\n\nArea is the two-dimensional space inside the boundary of a flat object.  Surface area is the total area of the exposed outer surfaces of a three-dimensional object. Volume is the three-dimensional space occupied by an object.\n\n### Area Formulas\n\n*   **Square:**  `Area = s²` where `s` is the side length.\n*   **Rectangle:** `Area = b × h` where `b` is the base and `h` is the height.\n*   **Triangle:** `Area = ½ × b × h` where `b` is the base and `h` is the height.\n*   **Trapezium:** `Area = ½ × (a + b) × h` where `a` and `b` are the parallel sides and `h` is the height.\n*   **Parallelogram:** `Area = b × h` where `b` is the base and `h` is the height.\n*   **Circle:** `Area = πr²` where `r` is the radius.\n\n\n### Volume Formulas\n\n*   **Rectangular Prism:** `Volume = l × b × h` where `l` is the length, `b` is the breadth, and `h` is the height.\n*   **Triangular Prism:** `Volume = (½ × b × h) × H` where `b` and `h` are the base and height of the triangular base, and `H` is the prism's height.\n*   **Cube:** `Volume = s³` where `s` is the side length.\n*   **Cylinder:** `Volume = πr² × h` where `r` is the radius and `h` is the height.\n*   **Square Pyramid:** `Volume = (⅓) × b² × H` where `b` is the base side length and `H` is the height.\n*   **Triangular Pyramid:** `Volume = (⅓) × (½ × b × h) × H` where `b` and `h` are the base and height of the triangular base, and `H` is the pyramid's height.\n*   **Right Cone:** `Volume = (⅓) × πr² × H` where `r` is the radius and `H` is the height.\n*   **Sphere:** `Volume = (4/3)πr³` where `r` is the radius.\n\n\n### Surface Area Formulas\n\n*   **Square Pyramid:** `Surface Area = b(b + 2h)` where `b` is the base side length and `h` is the slant height.\n*   **Triangular Pyramid:** `Surface Area = ½b(hb + 3hs)` where `b` is the base length, `hb` is the base height, and `hs` is the slant height.\n*   **Right Cone:** `Surface Area = πr(r + hs)` where `r` is the radius and `hs` is the slant height.\n*   **Sphere:** `Surface Area = 4πr²` where `r` is the radius.\n\nA net is the unfolded \"plan\" of a solid.  A pyramid is a geometric solid with a polygon base and sides converging at an apex.\n"
      },
      {
        "data": {
          "Title": "Circle Geometry Theorems",
          "icon": "⚪",
          "flashcards": [
            {
              "front": {
                "title": "Arc",
                "question": "What is an arc?"
              },
              "back": "A portion of the circumference of a circle."
            },
            {
              "front": {
                "title": "Chord",
                "question": "What is a chord?"
              },
              "back": "A straight line joining the ends of an arc."
            },
            {
              "front": {
                "title": "Circumference",
                "question": "What is the circumference of a circle?"
              },
              "back": "The perimeter or boundary line of a circle."
            },
            {
              "front": {
                "title": "Radius",
                "question": "What is the radius of a circle?"
              },
              "back": "Any straight line from the center of the circle to a point on the circumference."
            },
            {
              "front": {
                "title": "Diameter",
                "question": "What is the diameter of a circle?"
              },
              "back": "A chord that passes through the center of the circle. It's twice the length of the radius."
            },
            {
              "front": {
                "title": "Segment",
                "question": "What is a segment of a circle?"
              },
              "back": "A part of the circle cut off by a chord."
            },
            {
              "front": {
                "title": "Tangent",
                "question": "What is a tangent to a circle?"
              },
              "back": "A straight line that touches the circle at only one point on the circumference.  It is perpendicular to the radius at the point of contact."
            },
            {
              "front": {
                "title": "Angle Subtended by an Arc at the Center",
                "question": "How does the angle subtended by an arc at the center relate to the angle subtended at the circumference?"
              },
              "back": "The angle at the center is twice the size of the angle at the circumference."
            },
            {
              "front": {
                "title": "Angles Subtended by the Same Arc",
                "question": "What is true about angles at the circumference subtended by the same arc?"
              },
              "back": "They are equal."
            },
            {
              "front": {
                "title": "Cyclic Quadrilateral",
                "question": "What is the property of opposite angles in a cyclic quadrilateral?"
              },
              "back": "Opposite angles are supplementary (add up to 180°)."
            },
            {
              "front": {
                "title": "Tangent and Chord Theorem",
                "question": "What is the relationship between the angle between a tangent and a chord, and the angle in the alternate segment?"
              },
              "back": "They are equal."
            },
            {
              "front": {
                "title": "Tangents from a Point",
                "question": "What is true about tangents drawn from the same external point to a circle?"
              },
              "back": "The lengths of the tangents are equal."
            }
          ]
        },
        "content": "\n## Circle Geometry Theorems\n\n### Basic Definitions\n\n* **Arc:** A portion of the circumference of a circle.\n* **Chord:** A straight line segment joining two points on the circumference.\n* **Circumference:** The total distance around the circle.\n* **Radius (r):** The distance from the center of the circle to any point on the circumference.\n* **Diameter:** A chord passing through the center of the circle.  It is twice the length of the radius (2r).\n* **Segment:** The region bounded by a chord and an arc.\n* **Tangent:** A straight line that touches the circle at exactly one point.  The tangent is perpendicular to the radius at the point of contact.\n\n\n### Theorems\n\n* **Angle at the Center Theorem:** The angle subtended by an arc at the center of a circle is twice the angle subtended by the same arc at any point on the circumference.\n\n* **Angles Subtended by the Same Arc Theorem:** Angles subtended by the same arc at the circumference are equal.\n\n* **Cyclic Quadrilateral Theorem:** In a cyclic quadrilateral (a quadrilateral whose vertices lie on a circle), the sum of opposite angles is 180°.\n\n* **Tangent-Chord Theorem:** The angle between a tangent and a chord drawn from the point of contact is equal to the angle in the alternate segment.\n\n* **Tangents from an External Point:** Two tangents drawn from an external point to a circle are equal in length.\n\n\n### Properties of Perpendicular Bisectors\n\n* The perpendicular bisector of a chord passes through the center of the circle.\n* If a line segment from the center of the circle bisects a chord and is perpendicular to it, then that line segment is the perpendicular bisector of the chord.\n\n"
      },
      {
        "data": {
          "Title": "Financial Growth and Decay",
          "icon": "💰",
          "flashcards": [
            {
              "front": {
                "title": "Simple Interest",
                "question": "How is the future value calculated with simple interest?"
              },
              "back": "Formula:  ```math\nA = P(1 + in)\n``` where A is the future value, P is the principal, i is the interest rate per period, and n is the number of periods."
            },
            {
              "front": {
                "title": "Compound Interest",
                "question": "How is the future value calculated with compound interest?"
              },
              "back": "Formula: ```math\nA = P(1 + i)^n\n``` where A is the future value, P is the principal, i is the interest rate per period, and n is the number of periods."
            },
            {
              "front": {
                "title": "Simple Depreciation",
                "question": "How is the future value calculated with simple depreciation?"
              },
              "back": "Formula: ```math\nA = P(1 - in)\n``` where A is the future value, P is the initial value, i is the depreciation rate per period, and n is the number of periods."
            },
            {
              "front": {
                "title": "Compound Depreciation",
                "question": "How is the future value calculated with compound depreciation?"
              },
              "back": "Formula: ```math\nA = P(1 - i)^n\n``` where A is the future value, P is the initial value, i is the depreciation rate per period, and n is the number of periods."
            },
            {
              "front": {
                "title": "Nominal and Effective Interest Rates",
                "question": "How are nominal and effective annual interest rates related?"
              },
              "back": "Formula: ```math\n1 + i = (1 + i^(m)/m)^m\n``` where i is the effective annual interest rate, and i^(m) is the nominal interest rate compounded m times per year."
            }
          ]
        },
        "content": "\n## Financial Growth and Decay\n\n### Interest and Depreciation\n\nThis section covers the calculation of future values involving interest and depreciation, considering both simple and compound methods.\n\n#### Simple Interest\n\nSimple interest is calculated only on the principal amount.  The formula for simple interest is:\n\n```math\nA = P(1 + in)\n```\n\nWhere:\n\n* A = Future Value\n* P = Principal (initial amount)\n* i = Interest rate per period\n* n = Number of periods\n\n\n#### Compound Interest\n\nCompound interest is calculated on both the principal amount and accumulated interest from previous periods. The formula for compound interest is:\n\n```math\nA = P(1 + i)^n\n```\n\nWhere:\n\n* A = Future Value\n* P = Principal (initial amount)\n* i = Interest rate per period\n* n = Number of periods\n\n\n#### Simple Depreciation\n\nSimple depreciation is a method where the depreciation amount is constant each period. The formula for simple depreciation is:\n\n```math\nA = P(1 - in)\n```\n\nWhere:\n\n* A = Future Value\n* P = Initial Value\n* i = Depreciation rate per period\n* n = Number of periods\n\n\n#### Compound Depreciation\n\nCompound depreciation is a method where the depreciation amount is calculated on the remaining value each period. The formula for compound depreciation is:\n\n```math\nA = P(1 - i)^n\n```\n\nWhere:\n\n* A = Future Value\n* P = Initial Value\n* i = Depreciation rate per period\n* n = Number of periods\n\n\n#### Nominal and Effective Annual Interest Rates\n\nThe relationship between nominal and effective annual interest rates is given by:\n\n```math\n1 + i = (1 + i^(m)/m)^m\n```\n\nWhere:\n\n* i = Effective annual interest rate\n* i^(m) = Nominal interest rate compounded m times per year\n\nThis formula allows for the conversion between nominal rates (stated interest rate) and effective annual rates (the actual interest earned considering compounding).\n"
      },
      {
        "data": {
          "Title": "Basic Probability Concepts",
          "icon": "🎲",
          "flashcards": [
            {
              "front": {
                "title": "Outcome",
                "question": "What is an outcome in probability?"
              },
              "back": "A single observation of an experiment."
            },
            {
              "front": {
                "title": "Sample Space",
                "question": "Define sample space."
              },
              "back": "The set of all possible outcomes of an experiment."
            },
            {
              "front": {
                "title": "Event",
                "question": "What is an event in probability?"
              },
              "back": "A set of outcomes of an experiment."
            },
            {
              "front": {
                "title": "Probability",
                "question": "How is probability defined?"
              },
              "back": "A real number between 0 and 1 that describes how likely an event is to occur."
            },
            {
              "front": {
                "title": "Relative Frequency",
                "question": "How do you calculate relative frequency?"
              },
              "back": "The number of times an event occurs during experimental trials divided by the total number of trials."
            },
            {
              "front": {
                "title": "Union of Events",
                "question": "What is the union of events A and B?"
              },
              "back": "The set of all outcomes that occur in at least one of the events (A or B)."
            },
            {
              "front": {
                "title": "Intersection of Events",
                "question": "What is the intersection of events A and B?"
              },
              "back": "The set of all outcomes that occur in both events (A and B)."
            },
            {
              "front": {
                "title": "Mutually Exclusive Events",
                "question": "Define mutually exclusive events."
              },
              "back": "Events with no outcomes in common.  (A and B) = Ø"
            },
            {
              "front": {
                "title": "Complementary Events",
                "question": "What are complementary events?"
              },
              "back": "Two mutually exclusive events that together contain all outcomes in the sample space.  The complement of A is written as 'not A'."
            },
            {
              "front": {
                "title": "Independent Events",
                "question": "When are events considered independent?"
              },
              "back": "Two events where knowing the outcome of one does not affect the probability of the other. P(A and B) = P(A) * P(B)"
            },
            {
              "front": {
                "title": "Addition Rule",
                "question": "State the addition rule for probability."
              },
              "back": "P(A or B) = P(A) + P(B) - P(A and B)"
            },
            {
              "front": {
                "title": "Addition Rule (Mutually Exclusive)",
                "question": "What is the addition rule for mutually exclusive events?"
              },
              "back": "P(A or B) = P(A) + P(B)"
            },
            {
              "front": {
                "title": "Complementary Rule",
                "question": "State the complementary rule."
              },
              "back": "P(not A) = 1 - P(A)"
            },
            {
              "front": {
                "title": "Venn Diagram",
                "question": "What is a Venn diagram used for?"
              },
              "back": "A visual tool to show how events overlap. Regions represent events, containing outcomes, counts, or probabilities."
            },
            {
              "front": {
                "title": "Tree Diagram",
                "question": "How are tree diagrams used in probability?"
              },
              "back": "A visual tool for computing probabilities of dependent events.  Probabilities are multiplied along paths, and path probabilities are added for combinations of outcomes."
            },
            {
              "front": {
                "title": "Two-Way Contingency Table",
                "question": "What is a two-way contingency table used for?"
              },
              "back": "Organising data to determine dependence or independence between two events, each with two outcomes.  Shows counts for all outcome combinations."
            }
          ]
        },
        "content": "\n## Basic Probability Concepts\n\n### Terminology\n\n*   **Outcome:** A single observation of an experiment.\n*   **Sample Space:** The set of all possible outcomes of an experiment.\n*   **Event:** A set of outcomes of an experiment.\n*   **Probability:** A real number between 0 and 1 representing the likelihood of an event occurring.\n*   **Relative Frequency:** The number of times an event occurs divided by the total number of trials.\n*   **Union (A or B):** The set of outcomes in at least one of events A or B.\n*   **Intersection (A and B):** The set of outcomes in both events A and B.\n*   **Mutually Exclusive Events:** Events with no common outcomes.  (A and B) = Ø\n*   **Complementary Events:** Two mutually exclusive events whose union is the entire sample space.\n*   **Independent Events:** Knowing the outcome of one event doesn't affect the probability of the other.  P(A and B) = P(A) * P(B)\n\n\n### Identities\n\n*   **Addition Rule:**  `P(A or B) = P(A) + P(B) - P(A and B)`\n*   **Addition Rule (Mutually Exclusive):** `P(A or B) = P(A) + P(B)`\n*   **Complementary Rule:** `P(not A) = 1 - P(A)`\n\n\n### Visual Tools\n\n*   **Venn Diagram:** A visual representation of events and their overlaps.  Regions show outcomes, counts, or probabilities.\n*   **Tree Diagram:** A visual tool for calculating probabilities of dependent events.  Probabilities are multiplied along paths, and path probabilities are summed for combinations.\n*   **Two-Way Contingency Table:**  Organizes data to show the relationship between two events, each with two outcomes.  Displays counts for all possible combinations.\n\n"
      }
    ]
  }
};

export async function GET(request: Request) {
  const url = new URL(request.url);
  const id = url.searchParams.get("id");
  const lessonId = url.searchParams.get("lessonId")

  if (!id) {
    return Response.json(data);
  }

  const courseId = parseInt(id);
  const lessons = data.contents[courseId];

  if (!lessons) {
    return new Response("Course not found", { status: 404 });
  }

  if (lessonId) {
    const lesson = lessons[parseInt(lessonId)];
    return Response.json({ contents: lesson });
  }

  return Response.json({ contents: lessons });
}
