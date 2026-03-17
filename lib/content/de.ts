import type { SiteContent } from "@/lib/site";

export const deContent: SiteContent = {
  site: {
    name: "OldPart Precision",
    title: "OldPart Precision | Präzise gefertigte Ersatzteile für Klassiker",
    description:
      "OldPart Precision unterstützt Sammler und Restaurationswerkstätten dabei, schwer erhältliche Teile für historische Fahrzeuge präzise und werkstattfertig zu ersetzen.",
    locale: "de_CH",
    keywords: [
      "klassische fahrzeugteile",
      "präzisionsfertigung oldtimer",
      "remanufacturing klassiker",
      "restaurationswerkstatt",
      "kleinserien fahrzeugkomponenten",
    ],
  },
  header: {
    ctaLabel: "Anfrage starten",
  },
  hero: {
    eyebrow: "Historische Komponenten, präzise neu aufgebaut",
    title: "Präzise gefertigte Ersatzteile für die Komponenten, die Restaurationskataloge längst vergessen haben.",
    description:
      "OldPart Precision arbeitet mit Sammlern und spezialisierten Werkstätten zusammen, um seltene Komponenten historischer Fahrzeuge zu reverse-engineeren, zu fertigen und sauber zu vollenden, ohne Passform, Haptik oder Zurückhaltung im Auftritt zu verlieren.",
    primaryCtaLabel: "Angebot anfragen",
    secondaryCtaLabel: "Ablauf ansehen",
    workshopNoteLabel: "Werkstattnotiz",
    workshopNoteTitle: "Seltene Geometrien verdienen präzise Ersatzteile, kein Rätselraten.",
    workshopNoteDescription:
      "Unser Prozess bleibt fokussiert, dokumentiert und bewusst kleinvolumig, damit jedes Teil seinen Platz am Fahrzeug verdient.",
  },
  navigationLinks: [
    { label: "Ablauf", href: "#process" },
    { label: "Plattformen", href: "#platforms" },
    { label: "Beispiele", href: "#examples" },
    { label: "Anfrage", href: "#request" },
  ],
  metrics: [
    { value: "72h", label: "Erstprüfung innerhalb von" },
    { value: "40+", label: "Jahre Markenabdeckung" },
    { value: "<0,05 mm", label: "Toleranzziel für kritische Teile" },
    { value: "1:1", label: "Pfad zur originalgetreuen Rekonstruktion" },
  ],
  processSection: {
    eyebrow: "So arbeiten wir",
    title: "Ein präziser Weg vom defekten Original zum werkstattfertigen Ersatzteil.",
    description:
      "Wir halten den Ablauf technisch, ruhig und nachvollziehbar, damit Restaurationsbetriebe ohne Risiko bei Passung oder Finish weiterarbeiten können.",
  },
  processSteps: [
    {
      number: "01",
      title: "Defektes Teil erfassen",
      description:
        "Senden Sie Referenzfotos, Masse und Werkstattnotizen, damit wir die Geometrie beurteilen können, bevor die Fertigung beginnt.",
    },
    {
      number: "02",
      title: "Passung und Fertigung validieren",
      description:
        "Wir vergleichen historische Referenzen, definieren den richtigen Materialpfad und entwickeln eine präzise Strategie für die Kleinserie.",
    },
    {
      number: "03",
      title: "Werkstattfertiges Bauteil zurückerhalten",
      description:
        "Ihr überarbeitetes Teil kommt dokumentiert, oberflächengeprüft und bereit für den nächsten Restaurationsschritt zurück.",
    },
  ],
  platformsSection: {
    eyebrow: "Unterstützte Plattformen",
    title: "Kuratiertes Markenwissen für Restaurierungen, die noch immer das richtige Teil verdienen.",
    description:
      "Wir konzentrieren uns auf historische Plattformen, bei denen Geometrie, Oberfläche und Passung nicht wie Massenware behandelt werden dürfen.",
  },
  supportedPlatforms: [
    {
      name: "Porsche",
      years: "356 bis luftgekühlter 911",
      summary: "Unterstützung für Kleinserien rund um ikonische Heckmotor-Plattformen.",
      image: "/images/platform-porsche-heritage.jpg",
      alt: "Blauer Porsche 356 bei einer Veranstaltung für klassische Fahrzeuge.",
      imagePosition: "center 52%",
    },
    {
      name: "Mercedes-Benz",
      years: "Pagode bis W123",
      summary:
        "Präzise Metallarbeit für Tourencoupés, Limousinen und langlebige Restaurierungen.",
      image: "/images/platform-mercedes-heritage.jpg",
      alt: "Grüner Mercedes-Benz W123 in seitlicher Ansicht auf einer Wiese.",
      imagePosition: "center 46%",
    },
    {
      name: "BMW",
      years: "Neue Klasse bis E24",
      summary:
        "Präzise Ersatzpfade für seltene Halter, Träger, Zierleisten und Gehäuse.",
      image: "/images/platform-bmw-heritage.jpg",
      alt: "Roter BMW 2002 bei einem Treffen klassischer Fahrzeuge.",
      imagePosition: "center 42%",
    },
    {
      name: "Alfa Romeo",
      years: "Giulia bis Spider",
      summary:
        "Elegante italienische Plattformen mit originalgetreuer Geometrie und zurückhaltendem Finish.",
      image: "/images/platform-alfa-heritage.jpg",
      alt: "Historischer Alfa Romeo Spider in einer italienischen Altstadtgasse.",
      imagePosition: "center 78%",
    },
  ],
  examplesSection: {
    eyebrow: "Beispielteile",
    title: "Konkrete Beispiele für Komponenten, die eine Restaurierung sonst oft zum Stillstand bringen.",
    description:
      "Jedes Beispiel steht für ein eng umrissenes Werkstattproblem, das mit sauberer Dokumentation statt mit Improvisation gelöst wurde.",
    footerLabel: "Gebaut für restaurationsorientierte Kleinserien",
  },
  exampleParts: [
    {
      name: "Gasgestänge-Kragen",
      note:
        "Anhand eines erhaltenen Originals vermessen und für wiederholgenaue Ausrichtung neu aufgebaut.",
      process: "Prüfung, Toleranzkontrolle, Finish",
      image: "/images/example-part-1.jpg",
      alt: "Eine Fachperson misst ein langes Metallteil mit einem Präzisionswerkzeug.",
    },
    {
      name: "Fensterheber-Zahnradeinsatz",
      note:
        "Für Restaurierungen in Kleinserie neu gefertigt, wenn Katalogware längst nicht mehr verfügbar ist.",
      process: "Reverse Engineering, Fertigung, Entgraten",
      image: "/images/example-part-2.jpg",
      alt: "Nahaufnahme eines CNC-Fräskopfes bei der Bearbeitung eines kleinen Metallbauteils.",
    },
  ],
  requestSection: {
    eyebrow: "Teil anfragen",
    title:
      "Sagen Sie uns, welches Teil defekt ist, zu welchem Fahrzeug es gehört und worauf die Restaurierung wartet.",
    description:
      "Diese erste Version ist bewusst als fokussierte Frontend-Erfahrung gebaut, damit Werkstätten den Anfrageablauf vor einer Backend-Anbindung beurteilen können.",
  },
  requestForm: {
    labels: {
      name: "Name",
      email: "E-Mail",
      platform: "Fahrzeugplattform",
      year: "Jahr / Baudetail",
      urgency: "Dringlichkeit",
      partDescription: "Teilebeschreibung",
    },
    selectPlaceholder: "Option auswählen",
    helperText:
      "Dieses Formular ist in v1 nur ein Frontend-Entwurf. Beim Absenden erscheint lediglich eine Beispielbestätigung, und es werden noch keine Daten übertragen.",
    submitLabel: "Anfrage absenden",
    successMessage:
      "Anfrageentwurf lokal zur Prüfung gespeichert. Dies ist ein simuliertes Erfolgserlebnis für die reine Frontend-Version.",
    validation: {
      name: "Bitte geben Sie Ihren Namen ein.",
      email: "Bitte geben Sie Ihre E-Mail ein.",
      platform: "Bitte wählen Sie Ihre Fahrzeugplattform aus.",
      partDescription: "Bitte beschreiben Sie das benötigte Teil.",
    },
    options: {
      platforms: [
        "Porsche",
        "Mercedes-Benz",
        "BMW",
        "Alfa Romeo",
        "Anderes historisches Fahrzeug",
      ],
      urgency: [
        "Ich informiere mich zunächst",
        "Ich brauche diese Woche ein Angebot",
        "Das Fahrzeug ist aktuell nicht fahrbereit",
      ],
    },
  },
  sustainabilitySection: {
    eyebrow: "Reparieren statt ersetzen",
    title:
      "Bessere Erhaltung beginnt damit, gute Fahrzeuge im Einsatz zu halten, statt Systeme unnötig komplett zu ersetzen.",
    description:
      "Durchdachtes Remanufacturing hilft Besitzern, seltene Fahrzeuge zu erhalten, Abfall zu reduzieren und originale Systeme nicht zu früh aus dem Verkehr zu ziehen.",
    ctaLabel: "Anfrage starten",
  },
  sustainabilityBullets: [
    "Die Reparatur schwer beschaffbarer Komponenten hält originale Fahrzeuge länger auf der Strasse.",
    "Gezieltes Remanufacturing vermeidet unnötigen Komplettaustausch und reduziert Materialverschwendung.",
    "Kleinserien unterstützen erhaltungsorientierte Werkstätten, ohne unnötig Lagerbestand aufzubauen.",
  ],
  footer: {
    name: "OldPart Precision",
    description:
      "Präzisionsorientiertes Remanufacturing für seltene Komponenten historischer Fahrzeuge.",
  },
  languageToggle: {
    activeLabel: "Deutsch",
    inactiveLabel: "English",
  },
};
