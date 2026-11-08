import type { ProjectDetail } from '../types/projectDetail'

export const projectDetails: ProjectDetail[] = [
  {
    id: 'textile',
    titleKey: 'projects.items.textile.title',
    descriptionKey: 'projectDetails.textile.description',
    objectivesKey: 'projectDetails.textile.objectives',

    features: [
      'projectDetails.textile.features.orders',
      'projectDetails.textile.features.production',
      'projectDetails.textile.features.tracking',
      'projectDetails.textile.features.users',
    ],

    technologies: [
      'Java',
      'Spring Boot',
      'Spring Data JPA',
      'PostgreSQL',
      'Thymeleaf',
      'Bootstrap 5',
    ],

    screenshots: [
      {
            image: '/images/projects/textile/screenshots/dashboard.png',
            captionKey: 'projectDetails.textile.screenshots.dashboard',
            descriptionKey: 'projectDetails.textile.screenshots.dashboardDescription',
        },
        {
            image: '/images/projects/textile/screenshots/commandes.png',
            captionKey: 'projectDetails.textile.screenshots.orders',
            descriptionKey: 'projectDetails.textile.screenshots.ordersDescription',
        },
        {
            image: '/images/projects/textile/screenshots/production.png',
            captionKey: 'projectDetails.textile.screenshots.production',
            descriptionKey: 'projectDetails.textile.screenshots.productionDescription',
        },
        {
            image: '/images/projects/textile/screenshots/login.png',
            captionKey: 'projectDetails.textile.screenshots.login',
            descriptionKey: 'projectDetails.textile.screenshots.loginDescription',
        },
        {
            image: '/images/projects/textile/screenshots/administration.png',
            captionKey: 'projectDetails.textile.screenshots.administration',
            descriptionKey: 'projectDetails.textile.screenshots.administrationDescription',
        },
        {
            image: '/images/projects/textile/screenshots/client.png',
            captionKey: 'projectDetails.textile.screenshots.client',
            descriptionKey: 'projectDetails.textile.screenshots.clientDescription',
        },
        {
            image: '/images/projects/textile/screenshots/notification.png',
            captionKey: 'projectDetails.textile.screenshots.notification',
            descriptionKey: 'projectDetails.textile.screenshots.notificationDescription',
        },
        {
            image: '/images/projects/textile/screenshots/responsable_commande.png',
            captionKey: 'projectDetails.textile.screenshots.orderManager',
            descriptionKey: 'projectDetails.textile.screenshots.orderManagerDescription',
        },
        {
            image: '/images/projects/textile/screenshots/suivi_production_resp.png',
            captionKey: 'projectDetails.textile.screenshots.productionTracking',
            descriptionKey: 'projectDetails.textile.screenshots.productionTrackingDescription',
        },
        {
            image: '/images/projects/textile/screenshots/tache_operateur.png',
            captionKey: 'projectDetails.textile.screenshots.operatorTask',
            descriptionKey: 'projectDetails.textile.screenshots.operatorTaskDescription',
        },
    ],
  },

  {
    id: 'electricity',
    titleKey: 'projects.items.electricity.title',
    descriptionKey: 'projectDetails.electricity.description',
    objectivesKey: 'projectDetails.electricity.objectives',

    features: [
        'projectDetails.electricity.features.reporting',
        'projectDetails.electricity.features.management',
        'projectDetails.electricity.features.prediction',
        'projectDetails.electricity.features.statistics',
    ],

    technologies: [
        'React',
        'FastAPI',
        'PostgreSQL',
        'Docker',
    ],

    screenshots: [
        {
        image: '/images/projects/electricity/screenshots/dashboard.png',
        captionKey: 'projectDetails.electricity.screenshots.dashboard',
        descriptionKey: 'projectDetails.electricity.screenshots.dashboardDescription',
        },
        {
        image: '/images/projects/electricity/screenshots/carte-interactive.png',
        captionKey: 'projectDetails.electricity.screenshots.map',
        descriptionKey: 'projectDetails.electricity.screenshots.mapDescription',
        },
        {
        image: '/images/projects/electricity/screenshots/gestion-coupures.png',
        captionKey: 'projectDetails.electricity.screenshots.management',
        descriptionKey: 'projectDetails.electricity.screenshots.managementDescription',
        },
        {
        image: '/images/projects/electricity/screenshots/predictions.png',
        captionKey: 'projectDetails.electricity.screenshots.predictions',
        descriptionKey: 'projectDetails.electricity.screenshots.predictionsDescription',
        },
        {
        image: '/images/projects/electricity/screenshots/administration.png',
        captionKey: 'projectDetails.electricity.screenshots.administration',
        descriptionKey: 'projectDetails.electricity.screenshots.administrationDescription',
        },
        {
        image: '/images/projects/electricity/screenshots/connexion.png',
        captionKey: 'projectDetails.electricity.screenshots.login',
        descriptionKey: 'projectDetails.electricity.screenshots.loginDescription',
        },
    ],
    },

    {
    id: 'parking',
    titleKey: 'projects.items.parking.title',
    descriptionKey: 'projectDetails.parking.description',
    objectivesKey: 'projectDetails.parking.objectives',

    features: [
        'projectDetails.parking.features.places',
        'projectDetails.parking.features.reservations',
        'projectDetails.parking.features.finance',
        'projectDetails.parking.features.clients',
    ],

    technologies: [
        'Java',
        'Spring Boot',
        'Spring Data JPA',
        'PostgreSQL',
        'Thymeleaf',
        'Bootstrap 5',
    ],

    screenshots: [
        {
        image: '/images/projects/parking/screenshots/places.png',
        captionKey: 'projectDetails.parking.screenshots.places',
        descriptionKey: 'projectDetails.parking.screenshots.placesDescription',
        },
        {
        image: '/images/projects/parking/screenshots/reservation.png',
        captionKey: 'projectDetails.parking.screenshots.reservations',
        descriptionKey: 'projectDetails.parking.screenshots.reservationsDescription',
        },
        {
        image: '/images/projects/parking/screenshots/finance.png',
        captionKey: 'projectDetails.parking.screenshots.finance',
        descriptionKey: 'projectDetails.parking.screenshots.financeDescription',
        },
        {
        image: '/images/projects/parking/screenshots/client.png',
        captionKey: 'projectDetails.parking.screenshots.clients',
        descriptionKey: 'projectDetails.parking.screenshots.clientsDescription',
        },
    ],
    },
    {
        id: 'students',
        titleKey: 'projects.items.students.title',
        descriptionKey: 'projectDetails.students.description',
        objectivesKey: 'projectDetails.students.objectives',

        features: [
            'projectDetails.students.features.list',
            'projectDetails.students.features.creation',
            'projectDetails.students.features.details',
            'projectDetails.students.features.editing',
        ],

        technologies: [
            'Python',
            'Django',
            'SQLite',
            'Bootstrap 5',
            'HTML',
            'CSS',
        ],

        screenshots: [
            {
            image: '/images/projects/students/screenshots/liste_etudiants.png',
            captionKey: 'projectDetails.students.screenshots.list',
            descriptionKey: 'projectDetails.students.screenshots.listDescription',
            },
            {
            image: '/images/projects/students/screenshots/ajout.png',
            captionKey: 'projectDetails.students.screenshots.creation',
            descriptionKey: 'projectDetails.students.screenshots.creationDescription',
            },
            {
            image: '/images/projects/students/screenshots/detail.png',
            captionKey: 'projectDetails.students.screenshots.details',
            descriptionKey: 'projectDetails.students.screenshots.detailsDescription',
            },
            {
            image: '/images/projects/students/screenshots/modification.png',
            captionKey: 'projectDetails.students.screenshots.editing',
            descriptionKey: 'projectDetails.students.screenshots.editingDescription',
            },
        ],
    },
]