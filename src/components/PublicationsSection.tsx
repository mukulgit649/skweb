import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ExternalLink, Quote, Users, Calendar, Book } from "lucide-react";

const PublicationsSection = () => {
  const journalPapers = [
    {
      title: "Bringing Field to the Lab: An In-Silico Analysis of Oxygen Production in Aquatic Plants",
      authors: "K. Agarwal., S. K. Mehta, C. Elias & P. K. Mondal",
      journal: "Langmuir",
      year: "Accepted",
      doi: "10.1021/acs.langmuir.5c04850",
      impact: "3.5",
      quartile: "Q1",
      indexing: "SCIE/SCI"
    },
    {
      title: "Does Finite Size Ion Modulate Electrolyte Transport?",
      authors: "Md Ismayeel, S. K. Mehta, P. K. Mondal",
      journal: "Analytical Chemistry",
      year: "2025",
      doi: "10.1021/acs.analchem.5c04068",
      impact: "6.7",
      quartile: "Q1",
      indexing: "SCIE/SCI"
    },
    {
      title: "Unveiling mysteries of micro-porous structures in xylem vascular of plants: Characterising nutrient transport using electro-hydrodynamics",
      authors: "J. Kalita, S.K. Mehta, P.K. Mondal",
      journal: "Flow",
      year: "2025",
      doi: "10.1017/flo.2025.10031",
      impact: "N/A",
      quartile: "Q1",
      indexing: "SCIE/SCI"
    },
    {
      title: "Ion-partitioning effect promotes the electroosmotic mixing of non-Newtonian fluids in soft-patterned microchannel",
      authors: "S. K. Mehta, P. P. Behera, A. Dutta, B. J.Sharma, A. G. Borah, P. Bora, S. Borah, S. Wongwises, P. K. Mondal",
      journal: "Physical Chemistry Chemical Physics",
      year: "2025",
      doi: "10.1039/D5CP02072G",
      impact: "2.9",
      quartile: "Q2",
      indexing: "SCIE/SCI"
    },
    {
      title: "Thermohydraulic Characteristic for Viscoplastic Fluid Flow Inside the Wavy Channel With Metallic Porous Blocks: A Prediction Using Artificial Neural Network",
      authors: "S. K. Mehta, J. Murmu, M. Saha, P. K. Mondal, and S. Wongwises",
      journal: "Heat Transf.",
      year: "2025",
      doi: "10.1002/htj.70047",
      impact: "2.6",
      quartile: "Q2",
      indexing: "SCIE/SCI"
    },
    {
      title: "Pore-scale immiscible interfacial transport facilitates low-cost droplet generation",
      authors: "P. P. Behera, S. K. Mehta, R. K. Arun, and P. K. Mondal",
      journal: "Soft Matter",
      year: "2025",
      doi: "10.1039/D5SM00498E",
      impact: "2.9",
      quartile: "Q2",
      indexing: "SCIE/SCI"
    },
    {
      title: "Arresting of Viscoelectric Effect Modulated Flow Reduction in Nanochannels with Imposed Temperature Gradients",
      authors: "S. K. Mehta, G. Biswas, and P. K. Mondal",
      journal: "Langmuir",
      year: "2025",
      doi: "10.1021/acs.langmuir.5c01576",
      impact: "3.5",
      quartile: "Q1",
      indexing: "SCIE/SCI"
    },
    {
      title: "Toward salinity-gradient modulated ionic transport in a nanoslit: A framework accelerating electrical energy generation",
      authors: "S.K. Mehta, P.K. Mondal, S.Wongwises",
      journal: "The Journal of Chemical Physics",
      year: "2025",
      doi: "10.1063/5.0268845",
      impact: "3.1",
      quartile: "Q1",
      indexing: "SCIE/SCI"
    },
    {
      title: "Paper-Based Microfluidics: Analyte-Driven Imbibition Under the Lens",
      authors: "S. K. Mehta, S. K. Mehta, A. Q. Shen, P. K. Mondal",
      journal: "Biomicrofluidics",
      year: "2025",
      doi: "10.1063/5.0263749",
      impact: "3.2",
      quartile: "Q2",
      indexing: "SCIE/SCI"
    },
    {
      title: "Steric effect induced heat transfer characteristics of electro-magneto-hydrodynamic electroosmotic flow through a microchannel considering interfacial slip",
      authors: "Sujith T., S. K. Mehta, S. Pati",
      journal: "Physics of Fluids",
      year: "2025",
      doi: "10.1063/5.0267237",
      impact: "4.1",
      quartile: "Q1",
      indexing: "SCIE/SCI"
    },
    {
      title: "Non-Newtonian Solute Mixing via Protonic Exchange of a Polyelectrolyte Layer: Unveiling Formation of Electroosmotic Vortices",
      authors: "D. Kumar, S. K. Mehta, P. K. Mondal",
      journal: "Langmuir",
      year: "2025",
      doi: "10.1021/acs.langmuir.4c05290",
      impact: "3.5",
      quartile: "Q1",
      indexing: "SCIE/SCI"
    },
    {
      title: "Towards the characterization of chemiosmotic flow of ionic liquid in charged nanochannels",
      authors: "P. Padhi, S. K. Mehta, P. K. Mondal and S.Wongwises",
      journal: "Phys. Chem. Chem. Phys.",
      year: "2025",
      doi: "10.1039/D5CP00555H",
      impact: "2.9",
      quartile: "Q2",
      indexing: "SCIE/SCI"
    },
    {
      title: "Ion size-dependent heat transfer characteristics of electroosmotic flow through a microchannel considering interfacial slip",
      authors: "Sujith T., S. K. Mehta, S. Pati",
      journal: "Physics of Fluids",
      year: "2025",
      doi: "10.1063/5.0257243",
      impact: "4.1",
      quartile: "Q1",
      indexing: "SCIE/SCI"
    },
    {
      title: "Flow environment affects nutrient transport in soft plant roots",
      authors: "S. K. Mehta, A. Talukdar, S. Panja, J. Kalita, S. Wongwises and P.K. Mondal",
      journal: "Soft Matter",
      year: "2025",
      doi: "10.1039/D4SM01083C",
      impact: "2.9",
      quartile: "Q2",
      indexing: "SCIE/SCI"
    },
    {
      title: "Augmented electronic cooling strategy: effect of foam pore size for forced convective flow through wavy canopy",
      authors: "D. Deb, S. K. Mehta, P.K. Mondal, S. Wongwises",
      journal: "Microsystem Technologies",
      year: "2025",
      doi: "10.1007/s00542-024-05841-6",
      impact: "1.6",
      quartile: "N/A",
      indexing: "SCIE"
    },
    {
      title: "Paper-based lateral flow assays: Prediction of methanol content in alcoholic beverages",
      authors: "P.P. Behera, S. K. Mehta, K. Agarwal, S. Bera, R. K. Arun, P. K. Mondal",
      journal: "Physics of Fluids",
      year: "2024",
      doi: "10.1063/5.0245824",
      impact: "4.1",
      quartile: "Q1",
      indexing: "SCIE/SCI"
    },
    {
      title: "Maximizing Blue Energy via Densely Grafted Soft Layers in Nanopores",
      authors: "Md Ismayeel, S. K. Mehta, P. K. Mondal",
      journal: "Langmuir",
      year: "2024",
      doi: "10.1021/acs.langmuir.4c03192",
      impact: "3.5",
      quartile: "Q1",
      indexing: "SCIE/SCI"
    },
    {
      title: "Soft plant root structure-media flow interactions: Exploring the adverse effect of lead contamination in North-Eastern Indian rice",
      authors: "S. Panja, S. K. Mehta, J. Kalita, M. K. Prasad, P. K. Mondal",
      journal: "Physics of Fluids",
      year: "2024",
      doi: "10.1063/5.0237867",
      impact: "4.1",
      quartile: "Q1",
      indexing: "SCIE/SCI"
    },
    {
      title: "Salinity-gradient induced energy generation inside a pH-sensitive charged nanochannel: Impact of ion partitioning effect",
      authors: "S.K. Mehta., P. Padhi, S. Wongwises, & P. K. Mondal",
      journal: "Microsystem Technologies",
      year: "2024",
      doi: "10.1007/s00542-024-05763-3",
      impact: "1.6",
      quartile: "Q3",
      indexing: "SCIE"
    },
    {
      title: "Harvesting Enhanced Blue Energy in Charged Nanochannels Using Semidiluted Polyelectrolyte Solution",
      authors: "S.K. Mehta., P.Padhi, S. Wongwises, & P. K. Mondal",
      journal: "Langmuir",
      year: "2024",
      doi: "10.1021/acs.langmuir.4c02557",
      impact: "3.5",
      quartile: "Q1",
      indexing: "SCIE/SCI"
    },
    {
      title: "Second law analysis: electrically actuated flow of non-Newtonian fluids in wavy microchannels",
      authors: "S.K. Mehta., P. Padhi, S. Wongwises, & P. K. Mondal",
      journal: "Microsystem Technologies",
      year: "2024",
      doi: "10.1007/s00542-024-05744-6",
      impact: "1.6",
      quartile: "Q3",
      indexing: "SCIE"
    },
    {
      title: "Maximizing blue energy: the role of ion partitioning in nanochannel systems",
      authors: "S.K. Mehta., D. Deb, A. Nand, A. Q., Shen, & P. K. Mondal",
      journal: "Physical Chemistry Chemical Physics",
      year: "2024",
      doi: "10.1039/D4CP01671H",
      impact: "2.9",
      quartile: "Q2",
      indexing: "SCIE/SCI"
    },
    {
      title: "Surface charge-dependent slip length modulates electroosmotic mixing in a wavy micromixer",
      authors: "M. Khatibi, S.K. Mehta., S.N. Ashrafizadeh, and P.K., Mondal",
      journal: "Physics of Fluids",
      year: "2024",
      doi: "10.1063/5.0218566",
      impact: "4.1",
      quartile: "Q1",
      indexing: "SCIE/SCI"
    },
    {
      title: "Insight into the electroosmotic vortex modulated reaction characteristics of viscoplastic fluids",
      authors: "S.K. Mehta, P.Bhushan, P. K. Mondal, and S. Wongwises",
      journal: "Physics of Fluids",
      year: "2024",
      doi: "10.1063/5.0211413",
      impact: "4.1",
      quartile: "Q1",
      indexing: "SCIE/SCI"
    },
    {
      title: "Unveiling nutrient flow mediated stress in the plant roots using on-chip phytofluidic device",
      authors: "K. Agarwal., S. K. Mehta, & P. K. Mondal",
      journal: "Lab on a Chip",
      year: "2024",
      doi: "10.1039/d4lc00180j",
      impact: "6.1",
      quartile: "Q1",
      indexing: "SCIE/SCI"
    },
    {
      title: "Intermittent flow influences plant root growth: A phytofluidics approach",
      authors: "P. Padhi, S. K. Mehta, K. Agrawal, P. K. Mondal",
      journal: "Physics of Fluids",
      year: "2024",
      doi: "10.1063/5.0195085",
      impact: "4.1",
      quartile: "Q1",
      indexing: "SCIE/SCI"
    },
    {
      title: "Electroosmosis of viscoelastic fluids in pH-sensitive hydrophobic microchannels: Effect of surface charge-dependent slip length",
      authors: "S.K. Mehta, A. Ghosh, P.K. Mondal, S. Wongwises",
      journal: "Physics of Fluids",
      year: "2024",
      doi: "10.1063/5.0181156",
      impact: "4.1",
      quartile: "Q1",
      indexing: "SCIE/SCI"
    },
    {
      title: "Electroosmotic mixing of viscoplastic fluids in a microchannel",
      authors: "S.K. Mehta, P.K. Mondal",
      journal: "Physical Review Fluids",
      year: "2024",
      doi: "10.1103/PhysRevFluids.9.023301",
      impact: "2.5",
      quartile: "Q1",
      indexing: "SCIE/SCI"
    },
    {
      title: "Characterisation of conjugate forced convection in a wavy solar power plant: The role of porous metallic blocks",
      authors: "S.K. Mehta, D. Kumar, P.K. Mondal, S. Wongwises",
      journal: "Chemical Engineering and Processing - Process Intensification",
      year: "2024",
      doi: "10.1016/j.cep.2023.109615",
      impact: "3.8",
      quartile: "Q1",
      indexing: "SCIE/SCI"
    },
    {
      title: "Solute imbibition in paper strip: Pore-scale insights into the concentration-dependent permeability",
      authors: "P.P. Behera; S.K. Mehta; R.K. Arun; P.K. Mondal",
      journal: "Physics of Fluids",
      year: "2023",
      doi: "10.1063/5.0177100",
      impact: "4.1",
      quartile: "Q1",
      indexing: "SCIE/SCI"
    },
    {
      title: "Viscoelectric effect on the chemiosmotic flow in charged soft nanochannels",
      authors: "S.K. Mehta, P.K. Mondal",
      journal: "Physics of Fluids",
      year: "2023",
      doi: "10.1063/5.0171806",
      impact: "4.1",
      quartile: "Q1",
      indexing: "SCIE/SCI"
    },
    {
      title: "AC Electrothermal Effect Promotes Enhanced Solute Mixing in a Wavy Microchannel",
      authors: "S.K. Mehta, P.K. Mondal",
      journal: "Langmuir",
      year: "2023",
      doi: "10.1021/acs.langmuir.3c02150",
      impact: "3.5",
      quartile: "Q1",
      indexing: "SCIE/SCI"
    },
    {
      title: "Reaction characteristics of non-Newtonian species in a microreactor: The role of electroosmotic vortices",
      authors: "S.K. Mehta, R. Kakati, A. Rahman, P.K. Mondal, S. Wongwises",
      journal: "Physics of Fluids",
      year: "2023",
      doi: "10.1063/5.0170034",
      impact: "4.1",
      quartile: "Q1",
      indexing: "SCIE/SCI"
    },
    {
      title: "Salinity gradient induced power generation in nanochannel: The role of pH-sensitive polyelectrolyte layer",
      authors: "S.K. Mehta, A. R. Raj, P.K. Mondal",
      journal: "Langmuir",
      year: "2023",
      doi: "10.1021/acs.langmuir.3c01236",
      impact: "3.5",
      quartile: "Q1",
      indexing: "SCIE/SCI"
    },
    {
      title: "Characterization of thermal-hydraulics in wavy solar power plant: effect of thermal dispersion",
      authors: "S.K. Mehta, D. Kumar, P.K. Mondal, S. Wongwises",
      journal: "Microsystem Technologies",
      year: "2023",
      doi: "10.1007/s00542-023-05507-9",
      impact: "1.6",
      quartile: "Q3",
      indexing: "SCIE"
    },
    {
      title: "Enhanced bio-fluids mixing by the soft polyelectrolyte layer modulated electroosmotic vortices",
      authors: "D. Kumar, S.K. Mehta, P.K. Mondal",
      journal: "Physics of Fluids",
      year: "2023",
      doi: "10.1063/5.0157622",
      impact: "4.1",
      quartile: "Q1",
      indexing: "SCIE/SCI"
    },
    {
      title: "Vortex-assisted electroosmotic mixing of Carreau fluid in a microchannel",
      authors: "S.K. Mehta, P.K. Mondal",
      journal: "Electrophoresis",
      year: "2023",
      doi: "10.1002/elps.202200258",
      impact: "3",
      quartile: "Q2",
      indexing: "SCIE/SCI"
    },
    {
      title: "Numerical investigation of thermo-hydraulic features of viscoplastic flow in wavy channels",
      authors: "H. Dey, S. K. Mehta, F. A. Ahmed, P. Roy, S. Pati, L. Baranyi",
      journal: "International Communications in Heat and Mass Transfer",
      year: "2023",
      doi: "10.1016/j.icheatmasstransfer.2023.106715",
      impact: "6.4",
      quartile: "Q1",
      indexing: "SCIE/SCI"
    },
    {
      title: "Steric Effect Induced Heat Transfer for Electroosmotic Flow of Carreau Fluid through a Wavy Microchannel",
      authors: "S. K. Mehta, S. Pati, L. Baranyi",
      journal: "Technische Mechanik",
      year: "2023",
      doi: "10.24352/UB.OVGU-2023-040",
      impact: "N/A",
      quartile: "Q4",
      indexing: "SCOPUS"
    },
    {
      title: "Prediction of Electrodiffusioosmotic Transport of Shear-thinning Fluids in a Nanochannel using Artificial Neural Network",
      authors: "M. Ismayeel, S. K. Mehta, P. K. Mondal",
      journal: "Physics of Fluids",
      year: "2023",
      doi: "10.1063/5.0134432",
      impact: "4.1",
      quartile: "Q1",
      indexing: "SCIE/SCI"
    },
    {
      title: "Analysis of hydrothermal performance for laminar forced convective flow through a wavy channel with porous blocks",
      authors: "S. K. Mehta, S. Pati",
      journal: "International Journal of Numerical Methods for Heat & Fluid Flow",
      year: "2023",
      doi: "10.1108/HFF-06-2022-0370",
      impact: "4",
      quartile: "Q1",
      indexing: "SCIE/SCI"
    },
    {
      title: "Analysis of thermal and hydraulic performances for flow in a wavy channel with varying amplitude",
      authors: "A. Kumar, S. K. Mehta, S. Pati, M. Murugesan",
      journal: "Journal of Thermal Analysis and Calorimetry",
      year: "2022",
      doi: "10.1007/s10973-022-11784-9",
      impact: "3",
      quartile: "Q2",
      indexing: "SCIE/SCI"
    },
    {
      title: "Effect of finite size of ions on entropy generation characteristics for electroosmotic flow through microchannel considering interfacial slip",
      authors: "Sujith T, S. K. Mehta, S. Pati",
      journal: "Journal of Thermal Analysis and Calorimetry",
      year: "2022",
      doi: "10.1007/s10973-022-11731-8",
      impact: "3",
      quartile: "Q2",
      indexing: "SCIE/SCI"
    },
    {
      title: "Free convective heat transfer and entropy generation characteristics for the nanofluid flow inside a wavy solar power plant",
      authors: "S.K. Mehta, P.K. Mondal",
      journal: "Microsystem Technologies",
      year: "2022",
      doi: "10.1007/s00542-022-05348-y",
      impact: "1.6",
      quartile: "Q3",
      indexing: "SCIE"
    },
    {
      title: "Influence of viscoelectric effect on diffusioosmosic transport in nanochannel",
      authors: "S.K. Mehta, P.K. Mondal",
      journal: "Electrophoresis",
      year: "2022",
      doi: "10.1002/elps.202200089",
      impact: "3",
      quartile: "Q2",
      indexing: "SCIE/SCI"
    },
    {
      title: "Analysis of forced convective nanofluid flow through a wavy channel with linearly varying amplitude at the entrance",
      authors: "A. Kumar, S. K. Mehta, S. Pati, L. Baranyi",
      journal: "International Journal of Numerical Methods for Heat & Fluid Flow",
      year: "2022",
      doi: "10.1108/HFF-01-2022-0034",
      impact: "4",
      quartile: "Q1",
      indexing: "SCIE/SCI"
    },
    {
      title: "Analysis of conjugate heat transfer for forced convective flow through wavy minichannel",
      authors: "A. Borah, S K. Mehta, S. Pati",
      journal: "International Journal of Numerical Methods for Heat & Fluid Flow",
      year: "2022",
      doi: "10.1108/HFF-01-2022-0031",
      impact: "4",
      quartile: "Q1",
      indexing: "SCIE/SCI"
    },
    {
      title: "Enhanced electroosmotic mixing of non-Newtonian fluids in a heterogeneous surface charged micromixer with obstacles",
      authors: "S. K. Mehta, B. Mondal, S. Pati, P. K. Patowari",
      journal: "Colloids and Surfaces A: Physicochemical and Engineering Aspects",
      year: "2022",
      doi: "10.1016/j.colsurfa.2022.129215",
      impact: "4.9",
      quartile: "Q1",
      indexing: "SCIE/SCI"
    },
    {
      title: "Electroosmotic mixing in a microchannel with heterogeneous slip dependent zeta potential",
      authors: "K. N. Vasista, S. K. Mehta, S. Pati",
      journal: "Chemical Engineering and Processing - Process Intensification",
      year: "2022",
      doi: "10.1016/j.cep.2022.108940",
      impact: "3.8",
      quartile: "Q1",
      indexing: "SCIE/SCI"
    },
    {
      title: "Analysis of thermo-hydraulic characteristics for flow of MWCNT-Fe3O4/H2O hybrid nanofluid through a wavy channel under magnetic field",
      authors: "S.K. Mehta, S. Pati",
      journal: "Proc. Inst. Mech. Eng. Part E J. Process Mech. Eng.",
      year: "2022",
      doi: "10.1177/09544089221094206",
      impact: "2.3",
      quartile: "Q2",
      indexing: "SCIE/SCI"
    },
    {
      title: "Enhanced electroosmotic mixing in a wavy micromixer using surface charge heterogeneity",
      authors: "S. K. Mehta, S. Pati",
      journal: "Industrial & Engineering Chemistry Research",
      year: "2022",
      doi: "10.1021/acs.iecr.1c04318",
      impact: "3.8",
      quartile: "Q1",
      indexing: "SCIE/SCI"
    },
    {
      title: "Effect of amplitude of walls on thermal and hydrodynamic characteristics of laminar flow through an asymmetric wavy channel",
      authors: "S. K. Mehta, S. Pati, L. Baranyi",
      journal: "Case Studies in Thermal Engineering",
      year: "2022",
      doi: "10.1016/j.csite.2022.101796",
      impact: "6.4",
      quartile: "Q1",
      indexing: "SCIE/SCI"
    },
    {
      title: "Electroosmotic flow of viscoelastic fluid through a microchannel with slip-dependent zeta potential",
      authors: "K. N. Vasista, S. K. Mehta, S. Pati, S. Sarkar",
      journal: "Physics of Fluids",
      year: "2021",
      doi: "10.1063/5.0073367",
      impact: "4.1",
      quartile: "Q1",
      indexing: "SCIE/SCI"
    },
    {
      title: "Analysis of thermal transport and entropy generation characteristics for electroosmotic flow through a hydrophobic microchannel considering viscoelectric effect",
      authors: "S. Pabi, S. K. Mehta, S. Pati",
      journal: "International Communications in Heat and Mass Transfer",
      year: "2021",
      doi: "10.1016/j.icheatmasstransfer.2021.105519",
      impact: "6.4",
      quartile: "Q1",
      indexing: "SCIE/SCI"
    },
    {
      title: "Numerical analysis of electroosmotic mixing in a heterogeneous charged micromixer with obstacles",
      authors: "B. Mondal, S. K. Mehta, P. K. Patowari, S. Pati",
      journal: "Chemical Engineering and Processing-Process Intensification",
      year: "2021",
      doi: "10.1016/j.cep.2021.108585",
      impact: "3.8",
      quartile: "Q1",
      indexing: "SCIE/SCI"
    },
    {
      title: "Analytical solution to heat transfer for mixed electroosmotic and pressure-driven flow through a microchannel with slip-dependent zeta potential",
      authors: "D. Banerjee, S. K. Mehta, S. Pati, P. Biswas",
      journal: "International Journal of Heat and Mass Transfer",
      year: "2021",
      doi: "10.1016/j.ijheatmasstransfer.2021.121989",
      impact: "5",
      quartile: "Q1",
      indexing: "SCIE/SCI"
    },
    {
      title: "Numerical assessment of hydrodynamic and mixing characteristics for mixed electroosmotic and pressure-driven flow through a wavy microchannel with patchwise surface heterogeneity",
      authors: "K. N. Vasista, S. K. Mehta, S. Pati",
      journal: "Proceedings of the Institution of Mechanical Engineers, Part E: Journal of Process Mechanical Engineering",
      year: "2021",
      doi: "10.1177/09544089211051640",
      impact: "2.3",
      quartile: "Q2",
      indexing: "SCIE/SCI"
    },
    {
      title: "Numerical study of the vortex induced electroosmotic mixing of non‐Newtonian biofluids in a non‐uniformly charged wavy microchannel:Effect of finite ion size",
      authors: "S.K. Mehta, S. Pati, P.K. Mondal",
      journal: "Electrophoresis",
      year: "2021",
      doi: "10.1002/elps.202000225",
      impact: "3",
      quartile: "Q2",
      indexing: "SCIE/SCI"
    },
    {
      title: "Analysis of thermo-hydraulic and entropy generation characteristics for flow through ribbed-wavy channel",
      authors: "S.K. Mehta, S. Pati, S. Ahmed, P. Bhattacharyya , J. J. Bordoloi",
      journal: "International Journal of Numerical Methods for Heat & Fluid Flow",
      year: "2021",
      doi: "10.1108/HFF-01-2021-0056",
      impact: "4",
      quartile: "Q1",
      indexing: "SCIE/SCI"
    },
    {
      title: "Thermo-hydraulic and entropy generation analysis for magnetohydrodynamic pressure driven flow of nanofluid through an asymmetric wavy channel",
      authors: "S.K. Mehta, S. Pati",
      journal: "International Journal of Numerical Methods for Heat & Fluid Flow",
      year: "2021",
      doi: "10.1108/HFF-05-2020-0300",
      impact: "4",
      quartile: "Q1",
      indexing: "SCIE/SCI"
    },
    {
      title: "Numerical study of thermo-hydraulic characteristics for forced convective flow through wavy channel at different Prandtl numbers",
      authors: "S.K. Mehta, S. Pati",
      journal: "Journal of Thermal Analysis and Calorimetry",
      year: "2020",
      doi: "10.1007/s10973-020-09412-5",
      impact: "3",
      quartile: "Q2",
      indexing: "SCIE/SCI"
    },
    {
      title: "Analysis of thermo-hydraulic performance and entropy generation characteristics for laminar flow through triangular corrugated channel",
      authors: "S.K. Mehta, S. Pati",
      journal: "Journal of Thermal Analysis and Calorimetry",
      year: "2019",
      doi: "10.1007/s10973-018-7969-1",
      impact: "3",
      quartile: "Q2",
      indexing: "SCIE/SCI"
    },
    {
      title: "Numerical study of mixing in wavy micromixers: comparison between raccoon and serpentine mixer",
      authors: "B. Mondal, S. K. Mehta, P. K. Patowari, S. Pati",
      journal: "Chemical Engineering and Processing-Process Intensification",
      year: "2019",
      doi: "10.1016/j.cep.2018.12.011",
      impact: "3.8",
      quartile: "Q1",
      indexing: "SCIE/SCI"
    },
    {
      title: "Numerical investigation of thermo-hydraulic transport characteristics in wavy channels: Comparison between raccoon and serpentine channels",
      authors: "S. Pati, S.K. Mehta, A. Borah",
      journal: "International Communications in Heat and Mass Transfer",
      year: "2017",
      doi: "10.1016/j.icheatmasstransfer.2017.09.001",
      impact: "6.4",
      quartile: "Q1",
      indexing: "SCIE/SCI"
    }
  ];

  const bookChapters = [
    {
      title: "Effect of Non-uniform Heating on Forced Convective Flow Through Asymmetric Wavy Channel",
      authors: "S.K. Mehta, S. Pati",
      book: "Recent Advances in Mechanical Engineering. Lecture Notes in Mechanical Engineering",
      publisher: "Springer, Singapore",
      year: "2021",
      doi: "10.1007/978-981-15-7711-6_34"
    },
    {
      title: "Effect of non-uniform heating on electroosmotic flow through microchannel",
      authors: "T. Sujith, S.K. Mehta, S. Pati",
      book: "Recent Adv. Mechanical Eng.",
      publisher: "Springer. Singapore",
      year: "2021",
      doi: "10.1007/978-981-15-7711-6_50"
    },
    {
      title: "Thermo-Hydraulic Performance for an Electronic Cooling System Using Porous Material",
      authors: "S.K. Mehta, S. Pati",
      book: "Techno-Societal 2020",
      publisher: "Springer, Cham",
      year: "2021",
      doi: "10.1007/978-3-030-69925-3_20"
    },
    {
      title: "Analysis of Heat Transfer and Pressure Drop for Pressure Driven Flow of Non-Newtonian Fluids Through a Serpentine Channel: Influence of Prandtl Number",
      authors: "S.K. Mehta, S. Pati",
      book: "Techno-Societal 2020",
      publisher: "Springer, Cham",
      year: "2021",
      doi: "10.1007/978-3-030-69925-3_92"
    },
    {
      title: "Effect of slip on vortex formation near two-part cylinder with same sign zeta potential in a plane microchannel",
      authors: "S. Pabi, S.K. Mehta, S. Pati",
      book: "Techno-Societal 2020",
      publisher: "Springer Cham",
      year: "2021",
      doi: "10.1007/978-3-030-69921-5_101"
    },
    {
      title: "Numerical study of electroosmotic flow over a hydrophobic wavy plate",
      authors: "S.K. Mehta, S. Pati",
      book: "Advances in Mechanical Engineering Select Proceedings of ICTEMA2022",
      publisher: "NOLEGEIN",
      year: "2022",
      doi: "ISBN: 978-81-952903-6-9"
    }
  ];

  const conferences = [
    {
      title: "Influence of Temperature on Xylem Nutrient Transport in Plants",
      authors: "J. Kalita, S. K. Mehta, S. Panja, P.K. Mondal, S. Wongwises",
      conference: "12th International Conference of Fluid Flow, Heat and Mass Transfer",
      location: "London, United Kingdom",
      year: "2025",
      doi: "10.11159/ffhmt25.122"
    },
    {
      title: "Efficient Blue Energy Harvesting in a Non-Uniformly Charged Bipolar Soft Nanopore",
      authors: "Md Ismayeel, S. K. Mehta, P. K. Mondal",
      conference: "11th International and 51st National Conference on Fluid Mechanics and Fluid Power (FMFP 2024)",
      location: "AMU Aligarh, India",
      year: "2024",
      doi: ""
    },
    {
      title: "Effect of nanofluidic wall swelling on blue energy generation under chemoosmotic flow",
      authors: "S. K. Mehta, P. K. Mondal, S. Wongwises",
      conference: "The 14th TSME International Conference on Mechanical Engineering 2024",
      location: "Pattaya, Thailand",
      year: "2024",
      doi: ""
    },
    {
      title: "Effect of Polyelectrolyte Porosity on the Osmotic Energy Generation in Bio-inspired Nanochannel",
      authors: "S. K. Mehta, J. Kalita, P.K. Mondal, S. Wongwises",
      conference: "ESDA2024, 7th International Conference on Energy Systems Drives and Automation",
      location: "Kolkata, India",
      year: "2024",
      doi: ""
    },
    {
      title: "Streaming Potential Mediated Electrical Energy Generation in Plants",
      authors: "J. Kalita, S. K. Mehta, P.K. Mondal, S. Wongwises",
      conference: "ESDA2024, 7th International Conference on Energy Systems Drives and Automation",
      location: "Kolkata, India",
      year: "2024",
      doi: ""
    },
    {
      title: "Influence of Liquid Electrical Conductivity on the Electroosmotic Flow Characteristics inside the Wavy Microchannel under Joule Heating",
      authors: "S. K. Mehta, P.K. Mondal, S. Wongwises",
      conference: "9th World Congress on Momentum, Heat and Mass Transfer (MHMT 2024)",
      location: "London, United Kingdom",
      year: "2024",
      doi: "10.11159/icmfht24.161"
    },
    {
      title: "Influence of Viscoplastic Nature of Liquids on the Conjugate Forced Convective Heat Transfer Characteristics in Wavy Channel with Ribs",
      authors: "S. K. Mehta, P.K. Mondal, S. Wongwises",
      conference: "First International Conference on Advances in Aerospace and Energy Systems (IAES 2024)",
      location: "Thiruvananthapuram, India",
      year: "2024",
      doi: ""
    },
    {
      title: "Augmented Cooling of Electronics Component inside the Wavy Passage under the Forced Convective Flow",
      authors: "D. Deb, S. K. Mehta, P.K. Mondal, S. Wongwises",
      conference: "6th International Conference on Energy Systems, Drives and Automations, ESDA2023",
      location: "Kolkata, India",
      year: "2023",
      doi: ""
    },
    {
      title: "Second Law Analysis for Non-Newtonian Fluids Electroosmotic flow in Wavy Microchannel with Finite Ionic Size",
      authors: "S. K. Mehta, P. Padhi, P.K. Mondal, S. Wongwises",
      conference: "6th International Conference on Energy Systems, Drives and Automations, ESDA2023",
      location: "Kolkata, India",
      year: "2023",
      doi: ""
    },
    {
      title: "Salinity-gradient Induced Energy Generation Inside the pH-Sensitive Charged Nanochannel: Impact of Ion Partitioning Effect",
      authors: "S. K. Mehta, P. Padhi, P.K. Mondal, S. Wongwises",
      conference: "6th International Conference on Energy Systems, Drives and Automations, ESDA2023",
      location: "Kolkata, India",
      year: "2023",
      doi: ""
    },
    {
      title: "Effect of Conjugate Heat Transfer on Thermo-Hydraulic Characteristics for the Non-Newtonian Fluid Flow in a Wavy Solar Power Plant with Metallic Porous Blocks",
      authors: "S. K. Mehta, P.K. Mondal, S. Wongwises",
      conference: "The 13th TSME International Conference on Mechanical Engineering 2023",
      location: "Chiang Mai, Thailand",
      year: "2023",
      doi: "10.1063/5.0236913"
    },
    {
      title: "Vortex assisted controlling of chemical reaction inside an electroosmotic micro-reactor",
      authors: "S. K. Mehta, A. Nath, S. Pati",
      conference: "4th International conference on recent advancements in mechanical engineering (ICRAME 2023)",
      location: "NIT Silchar, India",
      year: "2023",
      doi: "10.1007/978-981-96-6632-4_1"
    },
    {
      title: "Effect of thermal dispersion on thermo-hydraulic characteristics for flow through wavy solar power plant with metallic porous blocks",
      authors: "S. K. Mehta, D. Kumar, P.K. Mondal, S. Wongwises",
      conference: "ESDA2021, 4th International Conference on Energy Systems, Drives and Automation",
      location: "Kolkata, India",
      year: "2023",
      doi: ""
    },
    {
      title: "Free convective heat transfer characteristic of hybrid nanofluid inside the solar plant with porous block",
      authors: "S. K. Mehta, P.K. Mondal, S. Wongwises",
      conference: "12th TSME-International Conference on Mechanical Engineering 2022",
      location: "Phuket, Thailand",
      year: "2022",
      doi: "10.1063/5.0205307"
    },
    {
      title: "Natural convective heat removal from the heat generating electronics component using metallic porous extension",
      authors: "S. K. Mehta, P.K. Mondal, S. Wongwises",
      conference: "12th TSME-International Conference on Mechanical Engineering 2022",
      location: "Phuket, Thailand",
      year: "2022",
      doi: "10.1063/5.0205306"
    },
    {
      title: "Influence of Uneven Patch Zeta Potential on Electroosmotic Mixing Characteristics in a Heterogeneously Charged Micromixer",
      authors: "S. K. Mehta, A. Nath, S. Pati",
      conference: "4th International Conference on “Advanced Technologies for Societal Applications”, Techno-Societal 2022",
      location: "Pandharpur, India",
      year: "2022",
      doi: "10.1007/978-3-031-34648-4_80"
    },
    {
      title: "Effect of Patch Length on Electroosmotic Mixing Characteristics inside a Heterogeneously Charged Micromixer",
      authors: "A. Nath, S. K. Mehta, S. Pati",
      conference: "4th International Conference on “Advanced Technologies for Societal Applications”, Techno-Societal 2022",
      location: "Pandharpur, India",
      year: "2022",
      doi: "10.1007/978-3-031-34648-4_89"
    },
    {
      title: "Heat transfer and fluid flow analysis for electroosmotic flow of carreau fluid through a wavy microchannel considering steric effect",
      authors: "S. K. Mehta, S. Pati, L. Baranyi",
      conference: "Conference on Modelling Fluid Flow (CMFF’22)",
      location: "Budapest, Hungary",
      year: "2022",
      doi: ""
    },
    {
      title: "Effect on non-uniform heating on heat transfer characteristics in wavy channel",
      authors: "S.K. Mehta, S. Pati",
      conference: "5th international conference on computational methods for thermal problems",
      location: "IISc Bangalore, India",
      year: "2018",
      doi: ""
    },
    {
      title: "Performance analysis of an array of square micro-fins",
      authors: "T. Debnath, S. K. Mehta, P.K. Patowari",
      conference: "IOP Conference Series: Materials Science and Engineering",
      location: "N/A",
      year: "2018",
      doi: "10.1088/1757-899X/377/1/012056"
    },
    {
      title: "Thermo-Hydraulic Analysis for Flow through Triangular Corrugated Channel",
      authors: "S.K. Mehta, S. Pati",
      conference: "International Conference on Thermal Analysis and Energy Systems",
      location: "Coimbatore, India",
      year: "2018",
      doi: ""
    },
    {
      title: "Numerical analysis of thermo-hydraulic transport characteristics in wavy channel with porous wavy slab",
      authors: "S.K. Mehta, A. Kumar, S. Pati",
      conference: "7th International and 45th National Conference on Fluid Mechanics and Fluid Power (FMFP)",
      location: "IIT Bombay, Mumbai, India",
      year: "2018",
      doi: ""
    },
    {
      title: "Thermo-hydraulic analysis for forced convective flow through partially filled metallic porous wavy channel considering dispersion effect",
      authors: "S.K. Mehta, S. Pati",
      conference: "IHMTC-2019",
      location: "IIT Roorkee, India",
      year: "2018",
      doi: ""
    },
    {
      title: "Numerical study of thermo-hydraulic characteristics for forced convective flow through wavy channel at different Prandtl number",
      authors: "S.K. Mehta, S. Pati",
      conference: "International Mechanical Engineering Congress (IMEC-2019)",
      location: "NIT Tiruchirappalli, India",
      year: "2019",
      doi: ""
    },
    {
      title: "Natural convection heat transfer in a differentially Heated cavity with porous obstacle",
      authors: "D. K. Deka, S.K. Mehta, S. Pati",
      conference: "IHMTC-2019",
      location: "IIT Roorkee, India",
      year: "2019",
      doi: ""
    },
    {
      title: "Effect of non-uniform heating on forces convective flow through asymmetric wavy channel",
      authors: "S.K. Mehta, S. Pati",
      conference: "International Conference on Recent Developments in Mechanical Engineering, ICRAME 2020",
      location: "NIT Silchar, India",
      year: "2020",
      doi: ""
    },
    {
      title: "Thermo-hydraulic characteristics for MHD forced convective flow through raccoon channel",
      authors: "S.K. Mehta, S. Pati",
      conference: "International Conference on Energy and Sustainable Develeopment",
      location: "Jadavpur University, India",
      year: "2020",
      doi: ""
    },
    {
      title: "Effect of non-uniform heating on electroosmotic flow through microchannel",
      authors: "T. Sujith, S.K. Mehta, S. Pati",
      conference: "International Conference on Recent Developments in Mechanical Engineering, ICRAME 2020",
      location: "NIT Silchar, India",
      year: "2020",
      doi: ""
    },
    {
      title: "Thermo-Hydraulic Performance for an Electronic Cooling System Using Porous Material",
      authors: "S.K. Mehta, S. Pati",
      conference: "Techno-Societal 2020: 3rd International Conference on Advanced Technologies for Societal Applications",
      location: "Pandhapur, India",
      year: "2020",
      doi: ""
    },
    {
      title: "Analysis of Heat Transfer and Pressure Drop for Pressure Driven Flow of Non-Newtonian Fluids Through a Serpentine Channel: Influence of Prandtl Number",
      authors: "S.K. Mehta, S. Pati",
      conference: "Techno-Societal 2020: 3rd International Conference on Advanced Technologies for Societal Applications",
      location: "Pandhapur, India",
      year: "2020",
      doi: ""
    },
    {
      title: "Hydrodynamic and thermal transport characteristics for forced convective flow through a wavy channel with a linearly varying amplitude at the entrance region",
      authors: "A. Kumar, S. K. Mehta, S. Pati",
      conference: "International Conference on Thermal Analysis and Energy Systems (ICTAES-2021)",
      location: "Coimbatore, India",
      year: "2021",
      doi: ""
    },
    {
      title: "Numerical study of electroosmotic flow over a hydrophobic wavy plate",
      authors: "S. K. Mehta, S. Pati",
      conference: "International Conference on Thermal Engineering and Management Advances (ICTEMA 2022)",
      location: "West Bengal, India",
      year: "2022",
      doi: ""
    }
  ];

  return (
    <section id="publications" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="text-gradient">Publications</span> & Research Output
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Peer-reviewed contributions to fluid mechanics and computational science
          </p>
        </div>

        <Tabs defaultValue="journals" className="space-y-8">
          <TabsList className="grid w-full grid-cols-3 bg-black/40 backdrop-blur-md rounded-lg p-1 border border-white/10">
            <TabsTrigger value="journals" className="rounded-md data-[state=active]:bg-primary data-[state=active]:text-primary-foreground transition-all duration-300">
              Journal Papers
            </TabsTrigger>
            <TabsTrigger value="book-chapters" className="rounded-md data-[state=active]:bg-primary data-[state=active]:text-primary-foreground transition-all duration-300">
              Book Chapters
            </TabsTrigger>
            <TabsTrigger value="conferences" className="rounded-md data-[state=active]:bg-primary data-[state=active]:text-primary-foreground transition-all duration-300">
              Conferences
            </TabsTrigger>
          </TabsList>

          <TabsContent value="journals" className="space-y-6">
            {journalPapers.map((paper, index) => (
              <Card key={index} className="glass-card p-6 hover-lift group border-primary/20">
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-start gap-3 mb-3">
                      <Quote className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                      <h3 className="text-xl font-bold group-hover:text-primary transition-colors">
                        {paper.title}
                      </h3>
                    </div>

                    <div className="space-y-2 mb-4 pl-8">
                      <p className="text-sm text-muted-foreground italic">{paper.authors}</p>
                      <p className="text-primary font-medium">{paper.journal}</p>
                      <p className="text-sm text-muted-foreground">
                        Year: {paper.year} • DOI: {paper.doi}
                      </p>
                    </div>
                  </div>

                  <div className="lg:text-right space-y-3 pl-8 lg:pl-0">
                    <div className="flex lg:flex-col gap-2 items-center lg:items-end">
                      <Badge className="bg-primary/20 text-primary border-primary/50">
                        IF: {paper.impact}
                      </Badge>
                      <Badge variant="outline" className="border-primary/50">
                        {paper.quartile}
                      </Badge>
                      <Badge variant="secondary" className="bg-white/5">
                        {paper.indexing}
                      </Badge>
                    </div>

                    <div className="flex gap-2 justify-end">
                      <Button size="sm" variant="outline" className="glass-card border-primary/50 hover:border-primary" onClick={() => window.open(`https://doi.org/${paper.doi}`, '_blank')}>
                        <ExternalLink className="h-4 w-4 mr-1" />
                        View
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </TabsContent>

          <TabsContent value="book-chapters" className="space-y-6">
            {bookChapters.map((chapter, index) => (
              <Card key={index} className="glass-card p-6 hover-lift border-primary/20">
                <div className="flex items-start gap-3 mb-3">
                  <Book className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{chapter.title}</h3>
                    <p className="text-sm text-muted-foreground italic mb-2">{chapter.authors}</p>
                    <div className="flex flex-wrap gap-x-4 gap-y-2 text-sm text-muted-foreground">
                      <span className="text-primary font-medium">{chapter.book}</span>
                      <span>• {chapter.publisher}</span>
                      <span>• {chapter.year}</span>
                    </div>
                    <p className="text-xs text-muted-foreground mt-2">{chapter.doi}</p>
                  </div>
                </div>
              </Card>
            ))}
          </TabsContent>

          <TabsContent value="conferences" className="space-y-6">
            {conferences.map((conf, index) => (
              <Card key={index} className="glass-card p-6 hover-lift border-primary/20">
                <div className="flex items-start gap-3 mb-3">
                  <Users className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{conf.title}</h3>
                    <p className="text-sm text-muted-foreground italic mb-2">{conf.authors}</p>
                    <p className="text-primary font-medium mb-1">{conf.conference}</p>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar className="h-3 w-3" />
                      <span>{conf.year}</span>
                      <span>•</span>
                      <span>{conf.location}</span>
                    </div>
                    {conf.doi && <p className="text-xs text-muted-foreground mt-2">DOI: {conf.doi}</p>}
                  </div>
                </div>
              </Card>
            ))}
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default PublicationsSection;