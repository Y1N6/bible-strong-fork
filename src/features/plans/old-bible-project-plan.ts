import { Plan } from 'src/common/types'

export const bibleProjectPlan: Plan = {
  id: 'bible-project-plan',
  title: 'Lire les écritures',
  description:
    'Découvrez le plan "Lire les écritures" développé par The Bible Project. Ce plan se déroule généralement sur 365 jours, mais vous êtes libres de le lire à votre rythme !',
  image: 'readscripture',
  author: {
    id: 'ZvfOG5Yt9rN2lKc4sjb3n5W5pit1',
    displayName: 'Stéphane MLC',
    photoUrl:
      'https://lh3.googleusercontent.com/a-/AOh14GgMHihnLd5Bje30QhtP8s_eaUALPMDalSyOhTAWiw=s96-c',
  },
  sections: [
    {
      id: '1',
      title: 'Création et chute',
      subTitle: 'Genèse 1-11',
      image: 'tree',
      readingSlices: [
        {
          id: '0',
          slices: [
            {
              id: '0',
              type: 'Video',
              title: 'Vidéo : Genèse 1-11',
              description:
                "Genèse 1-11 : Dieu crée un monde bon, mais l'humanité se rebelle contre Dieu et le ruine. Nous retraçons cette histoire pour voir comment Dieu a un plan pour sauver et bénir le monde entier à travers Abraham.",
              url: 'https://www.youtube.com/watch?v=3m24IHVZ0XM',
            },
            { id: '1', src: '1_genesis_1', type: 'Image' },
            { id: '2', chapters: '1|1-3', type: 'Chapter' },
            {
              id: '3',
              chapters: '19|1',
              type: 'Chapter',
              subType: 'pray',
            },
          ],
        },
        {
          id: '347',
          slices: [
            {
              id: '0',
              type: 'Video',
              title: 'Vidéo : Image de Dieu',
              description:
                "Explorez le thème de l'image de Dieu vu dans la lecture précédente.",
              url: 'https://www.youtube.com/watch?v=sDnohPQxLD8',
            },
            { id: '1', src: '1_genesis_1', type: 'Image' },
            { id: '2', chapters: '1|4-7', type: 'Chapter' },
            {
              id: '3',
              chapters: '19|2',
              type: 'Chapter',
              subType: 'pray',
            },
          ],
        },
        {
          id: '348',
          slices: [
            {
              id: '0',
              type: 'Video',
              title: 'Torah: Genèse 1-11',
              description:
                'Récapitulez ce chapitre sur la création et la chute avec notre vidéo de la série animée Torah sur Genèse 1-11',
              url: 'https://www.youtube.com/watch?v=KOUV7mWDI34',
            },
            { id: '1', src: '1_genesis_1', type: 'Image' },
            { id: '2', chapters: '1|8-11', type: 'Chapter' },
            {
              id: '3',
              chapters: '19|3',
              type: 'Chapter',
              subType: 'pray',
            },
          ],
        },
      ],
    },
    {
      id: '2',
      title: "L'alliance avec Abraham",
      subTitle: 'Genèse 12-50',
      image: 'face',
      readingSlices: [
        {
          id: '8',
          slices: [
            { id: '0', src: '1_genesis_2', type: 'Image' },
            { id: '1', chapters: '1|41-42', type: 'Chapter' },
            {
              id: '2',
              chapters: '19|13',
              type: 'Chapter',
              subType: 'pray',
            },
          ],
        },
        {
          id: '15',
          slices: [
            { id: '0', src: '1_genesis_2', type: 'Image' },
            { id: '1', chapters: '1|43-45', type: 'Chapter' },
            {
              id: '2',
              chapters: '19|14',
              type: 'Chapter',
              subType: 'pray',
            },
          ],
        },
        {
          id: '16',
          slices: [
            { id: '0', src: '1_genesis_2', type: 'Image' },
            { id: '1', chapters: '1|46-47', type: 'Chapter' },
            {
              id: '2',
              chapters: '19|15',
              type: 'Chapter',
              subType: 'pray',
            },
          ],
        },
        {
          id: '20',
          slices: [
            {
              id: '0',
              type: 'Video',
              title: 'Vidéo : Genèse 12-50',
              description:
                "Genèse 12-50 : Dieu fait la promesse de bénir l'humanité rebelle à travers la famille d'Abraham, et l'histoire suit cette promesse à travers quatre générations.",
              url: 'https://www.youtube.com/watch?v=NylJU42gNnU',
            },
            { id: '1', src: '1_genesis_2', type: 'Image' },
            { id: '2', chapters: '1|12-15', type: 'Chapter' },
            {
              id: '3',
              chapters: '19|4',
              type: 'Chapter',
              subType: 'pray',
            },
          ],
        },
        {
          id: '81',
          slices: [
            {
              id: '0',
              type: 'Video',
              title: 'Torah : Genèse 12-50',
              description:
                'Vous avez presque terminé le livre de la Genèse ! Regardez la vidéo de notre série animée sur la Torah sur Genèse 12-50 pour vous rappeler ce que vous avez couvert et où vous allez.',
              url: 'https://www.youtube.com/watch?v=VpbWbyx1008',
            },
            { id: '1', src: '1_genesis_2', type: 'Image' },
            { id: '2', chapters: '1|35-37', type: 'Chapter' },
            {
              id: '3',
              chapters: '19|11',
              type: 'Chapter',
              subType: 'pray',
            },
          ],
        },
        {
          id: '82',
          slices: [
            { id: '0', src: '1_genesis_2', type: 'Image' },
            { id: '1', chapters: '1|19-21', type: 'Chapter' },
            {
              id: '2',
              chapters: '19|6',
              type: 'Chapter',
              subType: 'pray',
            },
          ],
        },
        {
          id: '83',
          slices: [
            { id: '0', src: '1_genesis_2', type: 'Image' },
            { id: '1', chapters: '1|22-24', type: 'Chapter' },
            {
              id: '2',
              chapters: '19|7',
              type: 'Chapter',
              subType: 'pray',
            },
          ],
        },
        {
          id: '84',
          slices: [
            { id: '0', src: '1_genesis_2', type: 'Image' },
            { id: '1', chapters: '1|29-31', type: 'Chapter' },
            {
              id: '2',
              chapters: '19|9',
              type: 'Chapter',
              subType: 'pray',
            },
          ],
        },
        {
          id: '85',
          slices: [
            { id: '0', src: '1_genesis_2', type: 'Image' },
            { id: '1', chapters: '1|25-28', type: 'Chapter' },
            {
              id: '2',
              chapters: '19|8',
              type: 'Chapter',
              subType: 'pray',
            },
          ],
        },
        {
          id: '86',
          slices: [
            { id: '0', src: '1_genesis_2', type: 'Image' },
            { id: '1', chapters: '1|32-34', type: 'Chapter' },
            {
              id: '2',
              chapters: '19|10',
              type: 'Chapter',
              subType: 'pray',
            },
          ],
        },
        {
          id: '87',
          slices: [
            { id: '0', src: '1_genesis_2', type: 'Image' },
            { id: '1', chapters: '1|38-40', type: 'Chapter' },
            {
              id: '2',
              chapters: '19|12',
              type: 'Chapter',
              subType: 'pray',
            },
          ],
        },
        {
          id: '349',
          slices: [
            {
              id: '0',
              type: 'Video',
              title: 'Vidéo : Les Alliances',
              description:
                "Voyez comment l'alliance de Dieu avec Noé s'inscrit dans l'histoire globale de la Bible",
              url: 'https://www.youtube.com/watch?v=FVzc7zXuQzA',
            },
            { id: '1', src: '1_genesis_2', type: 'Image' },
            { id: '2', chapters: '1|16-18', type: 'Chapter' },
            {
              id: '3',
              chapters: '19|5',
              type: 'Chapter',
              subType: 'pray',
            },
          ],
        },
        {
          id: '351',
          slices: [
            {
              id: '0',
              type: 'Video',
              title: 'Vidéo : Le Messie',
              description:
                'Le Messie : En savoir plus sur la promesse de Jacob à Juda concernant le futur roi',
              url: 'https://www.youtube.com/watch?v=4eBBvA8zzxI',
            },
            { id: '1', src: '1_genesis_2', type: 'Image' },
            { id: '2', chapters: '1|48-50', type: 'Chapter' },
            {
              id: '3',
              chapters: '19|16',
              type: 'Chapter',
              subType: 'pray',
            },
          ],
        },
      ],
    },
    {
      id: '3',
      title: "L'exode d'Egypte",
      subTitle: 'Exode 1-18',
      image: 'sea',
      readingSlices: [
        {
          id: '17',
          slices: [
            { id: '0', src: '02', type: 'Image' },
            { id: '1', chapters: '2|10-12', type: 'Chapter' },
            {
              id: '2',
              chapters: '19|20',
              type: 'Chapter',
              subType: 'pray',
            },
          ],
        },
        {
          id: '18',
          slices: [
            { id: '0', src: '02', type: 'Image' },
            { id: '1', chapters: '2|7-9', type: 'Chapter' },
            {
              id: '2',
              chapters: '19|19',
              type: 'Chapter',
              subType: 'pray',
            },
          ],
        },
        {
          id: '19',
          slices: [
            { id: '0', src: '02', type: 'Image' },
            { id: '1', chapters: '2|13-15', type: 'Chapter' },
            {
              id: '2',
              chapters: '19|21',
              type: 'Chapter',
              subType: 'pray',
            },
          ],
        },
        {
          id: '21',
          slices: [
            {
              id: '0',
              type: 'Video',
              title: 'Vidéo : Exode 1-18',
              description:
                "Exode 1-18 : Dieu sauve les Israélites de l'esclavage en Égypte et affronte le mal et l'injustice du roi Pharaon.",
              url: 'https://www.youtube.com/watch?v=6gAkIXm4ZN8',
            },
            { id: '1', src: '02', type: 'Image' },
            { id: '2', chapters: '2|1-3', type: 'Chapter' },
            {
              id: '3',
              chapters: '19|17',
              type: 'Chapter',
              subType: 'pray',
            },
          ],
        },
        {
          id: '350',
          slices: [
            {
              id: '0',
              type: 'Video',
              title: 'Vidéo : Sainteté',
              description:
                "Après Moïse et le buisson ardent, c'est un bon moment pour explorer le thème de la sainteté de Dieu.",
              url: 'https://www.youtube.com/watch?v=jxKoDvf2nXk',
            },
            { id: '1', src: '02', type: 'Image' },
            { id: '2', chapters: '2|4-6', type: 'Chapter' },
            {
              id: '3',
              chapters: '19|18',
              type: 'Chapter',
              subType: 'pray',
            },
          ],
        },
        {
          id: '352',
          slices: [
            {
              id: '0',
              type: 'Video',
              title: 'Torah : Exode 1-18',
              description:
                "Résumons ce chapitre sur l'Exode d'Egypte avec une vidéo animée de l'Exode 1-18.",
              url: 'https://www.youtube.com/watch?v=0uf-PgW7rqE',
            },
            { id: '1', src: '02', type: 'Image' },
            { id: '2', chapters: '2|16-18', type: 'Chapter' },
            {
              id: '3',
              chapters: '19|22',
              type: 'Chapter',
              subType: 'pray',
            },
          ],
        },
      ],
    },
    {
      id: '4',
      title: "L'Alliance au Mont Sinaï",
      subTitle: 'Exode 19-Leviticus',
      image: 'covenant',
      readingSlices: [
        {
          id: '3',
          slices: [
            { id: '0', src: '02', type: 'Image' },
            { id: '1', chapters: '2|22-24', type: 'Chapter' },
            {
              id: '2',
              chapters: '19|24',
              type: 'Chapter',
              subType: 'pray',
            },
          ],
        },
        {
          id: '22',
          slices: [
            {
              id: '0',
              type: 'Video',
              title: 'Vidéo : Exode 19-40',
              description:
                "Exode 19-40 : Dieu invite les Israélites rachetés à une relation d'alliance avec Lui, et descend pour habiter parmi eux dans le Tabernacle. Les Israélites se rebellent, toutefois, créant une faille dans la relation.",
              url: 'https://www.youtube.com/watch?v=GIdz46OiA5s',
            },
            { id: '1', src: '02', type: 'Image' },
            { id: '2', chapters: '2|19-21', type: 'Chapter' },
            {
              id: '3',
              chapters: '19|23',
              type: 'Chapter',
              subType: 'pray',
            },
          ],
        },
        {
          id: '23',
          slices: [
            {
              id: '0',
              type: 'Video',
              title: 'Vidéo : Lévitique',
              description:
                "Dieu répond au péché et à la rébellion des Israélites en leur fournissant une série élaborée de rituels et d'institutions pour faire face à leur péché. La sainteté de Dieu le motive à faire face à leur rébellion afin qu'il puisse vivre parmi eux en paix.",
              url: 'https://www.youtube.com/watch?v=Bule8U5Hfu4',
            },
            { id: '1', src: '03', type: 'Image' },
            { id: '2', chapters: '3|1-4', type: 'Chapter' },
            {
              id: '3',
              chapters: '19|30',
              type: 'Chapter',
              subType: 'pray',
            },
          ],
        },
        {
          id: '88',
          slices: [
            {
              id: '0',
              type: 'Video',
              title: 'Vidéo : Le ciel et la terre',
              description:
                "Plus qu'une liste ennuyeuse de spécifications de construction, ces chapitres sur le Tabernacle nous indiquent l'important thème biblique de la restauration du ciel et de la terre par Dieu.",
              url: 'https://www.youtube.com/watch?v=PZ-CmV2Xg6A',
            },
            { id: '1', src: '02', type: 'Image' },
            { id: '2', chapters: '2|25-27', type: 'Chapter' },
            {
              id: '3',
              chapters: '19|25',
              type: 'Chapter',
              subType: 'pray',
            },
          ],
        },
        {
          id: '89',
          slices: [
            { id: '0', src: '02', type: 'Image' },
            { id: '1', chapters: '2|28-29', type: 'Chapter' },
            {
              id: '2',
              chapters: '19|26',
              type: 'Chapter',
              subType: 'pray',
            },
          ],
        },
        {
          id: '90',
          slices: [
            { id: '0', src: '02', type: 'Image' },
            { id: '1', chapters: '2|30-31', type: 'Chapter' },
            {
              id: '2',
              chapters: '19|27',
              type: 'Chapter',
              subType: 'pray',
            },
          ],
        },
        {
          id: '91',
          slices: [
            { id: '0', src: '02', type: 'Image' },
            { id: '1', chapters: '2|32-34', type: 'Chapter' },
            {
              id: '2',
              chapters: '19|28',
              type: 'Chapter',
              subType: 'pray',
            },
          ],
        },
        {
          id: '92',
          slices: [
            {
              id: '0',
              type: 'Video',
              title: 'Vidéo: Sacrifice et Expiation',
              description:
                "En progressant dans le Lévitique, vous en apprendrez beaucoup sur les sacrements des animaux et les rituels sacerdotaux. C'est un bon moment pour se souvenir du thème biblique représenté ici : Expiation",
              url: 'https://www.youtube.com/watch?v=wmICj1t6UIA',
            },
            { id: '1', src: '03', type: 'Image' },
            { id: '2', chapters: '3|5-7', type: 'Chapter' },
            {
              id: '3',
              chapters: '19|31',
              type: 'Chapter',
              subType: 'pray',
            },
          ],
        },
        {
          id: '93',
          slices: [
            { id: '0', src: '03', type: 'Image' },
            { id: '1', chapters: '3|8-10', type: 'Chapter' },
            {
              id: '2',
              chapters: '19|32',
              type: 'Chapter',
              subType: 'pray',
            },
          ],
        },
        {
          id: '94',
          slices: [
            {
              id: '0',
              type: 'Video',
              title: 'Vidéo associée : Sainteté',
              description:
                "Vous êtes à mi-chemin du Lévitique ! Alors que nous apprenons les lois du sacrifice, c'est un bon moment pour se rappeler le thème général représenté ici : La sainteté de Dieu",
              url: 'https://www.youtube.com/watch?v=jxKoDvf2nXk',
            },
            { id: '1', src: '03', type: 'Image' },
            { id: '2', chapters: '3|11-13', type: 'Chapter' },
            {
              id: '3',
              chapters: '19|33',
              type: 'Chapter',
              subType: 'pray',
            },
          ],
        },
        {
          id: '95',
          slices: [
            { id: '0', src: '03', type: 'Image' },
            { id: '1', chapters: '3|24-25', type: 'Chapter' },
            {
              id: '2',
              chapters: '19|38',
              type: 'Chapter',
              subType: 'pray',
            },
          ],
        },
        {
          id: '96',
          slices: [
            { id: '0', src: '03', type: 'Image' },
            { id: '1', chapters: '3|16-18', type: 'Chapter' },
            {
              id: '2',
              chapters: '19|35',
              type: 'Chapter',
              subType: 'pray',
            },
          ],
        },
        {
          id: '97',
          slices: [
            { id: '0', src: '03', type: 'Image' },
            { id: '1', chapters: '3|21-23', type: 'Chapter' },
            {
              id: '2',
              chapters: '19|37',
              type: 'Chapter',
              subType: 'pray',
            },
          ],
        },
        {
          id: '98',
          slices: [
            { id: '0', src: '03', type: 'Image' },
            { id: '1', chapters: '3|14-15', type: 'Chapter' },
            {
              id: '2',
              chapters: '19|34',
              type: 'Chapter',
              subType: 'pray',
            },
          ],
        },
        {
          id: '99',
          slices: [
            { id: '0', src: '03', type: 'Image' },
            { id: '1', chapters: '3|19-20', type: 'Chapter' },
            {
              id: '2',
              chapters: '19|36',
              type: 'Chapter',
              subType: 'pray',
            },
          ],
        },
        {
          id: '353',
          slices: [
            {
              id: '0',
              type: 'Video',
              title: 'Torah : Exode 19-40',
              description:
                "Regardez un résumé animé d'Exodus 19-40 en terminant le livre de l'Exodus aujourd'hui.",
              url: 'https://www.youtube.com/watch?v=b0GhR-2kPKI',
            },
            { id: '1', src: '02', type: 'Image' },
            { id: '2', chapters: '2|35-40', type: 'Chapter' },
            {
              id: '3',
              chapters: '19|29',
              type: 'Chapter',
              subType: 'pray',
            },
          ],
        },
        {
          id: '354',
          slices: [
            {
              id: '0',
              type: 'Video',
              title: 'Torah : Lévitique',
              description:
                "Félicitations ! Vous allez finir le Lévitique aujourd'hui. Voici un résumé animé du livre.",
              url: 'https://www.youtube.com/watch?v=WmvyrLXoQio',
            },
            { id: '1', src: '03', type: 'Image' },
            { id: '2', chapters: '3|26-27', type: 'Chapter' },
            {
              id: '3',
              chapters: '19|39',
              type: 'Chapter',
              subType: 'pray',
            },
          ],
        },
      ],
    },
    {
      id: '5',
      title: 'Le désert',
      subTitle: 'Nombres, Deutéronome',
      image: 'altar',
      readingSlices: [
        {
          id: '24',
          slices: [
            {
              id: '0',
              type: 'Video',
              title: 'Vidéo : Nombres',
              description:
                "Nombres : Israël quitte le mont Sinaï et traverse le désert pour se rendre sur la terre promise à Abraham. Le voyage se déroule dans des conditions horribles alors qu'Israël se rebelle, et révèle comment Dieu fait preuve à la fois de justice et de miséricorde envers son peuple.",
              url: 'https://www.youtube.com/watch?v=VxrSqvkN-BY',
            },
            { id: '1', src: '04', type: 'Image' },
            { id: '2', chapters: '4|1-4', type: 'Chapter' },
            {
              id: '3',
              chapters: '19|40',
              type: 'Chapter',
              subType: 'pray',
            },
          ],
        },
        {
          id: '25',
          slices: [
            {
              id: '0',
              type: 'Video',
              title: 'Vidéo : Deutéronome',
              description:
                "Moïse donne aux Israélites ses dernières paroles de sagesse et d'avertissement avant qu'ils n'entrent dans la terre promise. Il les met au défi d'être fidèles à l'alliance et d'aimer Dieu.",
              url: 'https://www.youtube.com/watch?v=j8FrGTdho14',
            },
            { id: '1', src: '05', type: 'Image' },
            { id: '2', chapters: '5|1-3', type: 'Chapter' },
            {
              id: '3',
              chapters: '19|53',
              type: 'Chapter',
              subType: 'pray',
            },
          ],
        },
        {
          id: '26',
          slices: [
            { id: '0', src: '05', type: 'Image' },
            { id: '1', chapters: '5|4-6', type: 'Chapter' },
            {
              id: '2',
              chapters: '19|54',
              type: 'Chapter',
              subType: 'pray',
            },
          ],
        },
        {
          id: '100',
          slices: [
            {
              id: '0',
              type: 'Video',
              title: 'Vidéo : Sainteté',
              description:
                "Après Moïse et le buisson ardent, c'est un bon moment pour explorer le thème de la sainteté de Dieu.",
              url: 'https://www.youtube.com/watch?v=jxKoDvf2nXk',
            },
            { id: '1', src: '04', type: 'Image' },
            { id: '2', chapters: '4|5-7', type: 'Chapter' },
            {
              id: '3',
              chapters: '19|41',
              type: 'Chapter',
              subType: 'pray',
            },
          ],
        },
        {
          id: '101',
          slices: [
            { id: '0', src: '04', type: 'Image' },
            { id: '1', chapters: '4|8-10', type: 'Chapter' },
            {
              id: '2',
              chapters: '19|42',
              type: 'Chapter',
              subType: 'pray',
            },
          ],
        },
        {
          id: '102',
          slices: [
            { id: '0', src: '04', type: 'Image' },
            { id: '1', chapters: '4|11-13', type: 'Chapter' },
            {
              id: '2',
              chapters: '19|43',
              type: 'Chapter',
              subType: 'pray',
            },
          ],
        },
        {
          id: '103',
          slices: [
            { id: '0', src: '04', type: 'Image' },
            { id: '1', chapters: '4|14-16', type: 'Chapter' },
            {
              id: '2',
              chapters: '19|44',
              type: 'Chapter',
              subType: 'pray',
            },
          ],
        },
        {
          id: '104',
          slices: [
            { id: '0', src: '04', type: 'Image' },
            { id: '1', chapters: '4|17-18', type: 'Chapter' },
            {
              id: '2',
              chapters: '19|45',
              type: 'Chapter',
              subType: 'pray',
            },
          ],
        },
        {
          id: '105',
          slices: [
            { id: '0', src: '04', type: 'Image' },
            { id: '1', chapters: '4|19-21', type: 'Chapter' },
            {
              id: '2',
              chapters: '19|46',
              type: 'Chapter',
              subType: 'pray',
            },
          ],
        },
        {
          id: '106',
          slices: [
            { id: '0', src: '04', type: 'Image' },
            { id: '1', chapters: '4|28-30', type: 'Chapter' },
            {
              id: '2',
              chapters: '19|49',
              type: 'Chapter',
              subType: 'pray',
            },
          ],
        },
        {
          id: '107',
          slices: [
            { id: '0', src: '04', type: 'Image' },
            { id: '1', chapters: '4|25-27', type: 'Chapter' },
            {
              id: '2',
              chapters: '19|48',
              type: 'Chapter',
              subType: 'pray',
            },
          ],
        },
        {
          id: '108',
          slices: [
            { id: '0', src: '04', type: 'Image' },
            { id: '1', chapters: '4|22-24', type: 'Chapter' },
            {
              id: '2',
              chapters: '19|47',
              type: 'Chapter',
              subType: 'pray',
            },
          ],
        },
        {
          id: '120',
          slices: [
            { id: '0', src: '04', type: 'Image' },
            { id: '1', chapters: '4|31-32', type: 'Chapter' },
            {
              id: '2',
              chapters: '19|50',
              type: 'Chapter',
              subType: 'pray',
            },
          ],
        },
        {
          id: '121',
          slices: [
            { id: '0', src: '04', type: 'Image' },
            { id: '1', chapters: '4|33-34', type: 'Chapter' },
            {
              id: '2',
              chapters: '19|51',
              type: 'Chapter',
              subType: 'pray',
            },
          ],
        },
        {
          id: '122',
          slices: [
            { id: '0', src: '05', type: 'Image' },
            { id: '1', chapters: '5|7-9', type: 'Chapter' },
            {
              id: '2',
              chapters: '19|55',
              type: 'Chapter',
              subType: 'pray',
            },
          ],
        },
        {
          id: '123',
          slices: [
            {
              id: '0',
              type: 'Video',
              title: 'Vidéo : La loi',
              description:
                "La loi de l'Ancien Testament est souvent source de confusion pour les gens. Regardez cette vidéo thématique animée pour en savoir plus sur le droit dans son contexte.",
              url: 'https://www.youtube.com/watch?v=3BGO9Mmd_cU',
            },
            { id: '1', src: '05', type: 'Image' },
            { id: '2', chapters: '5|10-12', type: 'Chapter' },
            {
              id: '3',
              chapters: '19|56',
              type: 'Chapter',
              subType: 'pray',
            },
          ],
        },
        {
          id: '124',
          slices: [
            { id: '0', src: '05', type: 'Image' },
            { id: '1', chapters: '5|13-14', type: 'Chapter' },
            {
              id: '2',
              chapters: '19|57',
              type: 'Chapter',
              subType: 'pray',
            },
          ],
        },
        {
          id: '125',
          slices: [
            { id: '0', src: '05', type: 'Image' },
            { id: '1', chapters: '5|15-16', type: 'Chapter' },
            {
              id: '2',
              chapters: '19|58',
              type: 'Chapter',
              subType: 'pray',
            },
          ],
        },
        {
          id: '126',
          slices: [
            { id: '0', src: '05', type: 'Image' },
            { id: '1', chapters: '5|17-20', type: 'Chapter' },
            {
              id: '2',
              chapters: '19|59',
              type: 'Chapter',
              subType: 'pray',
            },
          ],
        },
        {
          id: '127',
          slices: [
            { id: '0', src: '05', type: 'Image' },
            { id: '1', chapters: '5|21-23', type: 'Chapter' },
            {
              id: '2',
              chapters: '19|60',
              type: 'Chapter',
              subType: 'pray',
            },
          ],
        },
        {
          id: '128',
          slices: [
            { id: '0', src: '05', type: 'Image' },
            { id: '1', chapters: '5|24-27', type: 'Chapter' },
            {
              id: '2',
              chapters: '19|61',
              type: 'Chapter',
              subType: 'pray',
            },
          ],
        },
        {
          id: '129',
          slices: [
            { id: '0', src: '05', type: 'Image' },
            { id: '1', chapters: '5|28-29', type: 'Chapter' },
            {
              id: '2',
              chapters: '19|62',
              type: 'Chapter',
              subType: 'pray',
            },
          ],
        },
        {
          id: '130',
          slices: [
            { id: '0', src: '05', type: 'Image' },
            { id: '1', chapters: '5|30-31', type: 'Chapter' },
            {
              id: '2',
              chapters: '19|63',
              type: 'Chapter',
              subType: 'pray',
            },
          ],
        },
        {
          id: '131',
          slices: [
            {
              id: '0',
              type: 'Video',
              title: 'Torah : Deutéronome',
              description:
                "Voici un résumé animé du livre du Deutéronome ! Félicitations pour avoir terminé un autre livre aujourd'hui.",
              url: 'https://www.youtube.com/watch?v=NMhmDPWeftw',
            },
            { id: '1', src: '05', type: 'Image' },
            { id: '2', chapters: '5|32-34', type: 'Chapter' },
            {
              id: '3',
              chapters: '19|64',
              type: 'Chapter',
              subType: 'pray',
            },
          ],
        },
        {
          id: '355',
          slices: [
            {
              id: '0',
              type: 'Video',
              title: 'Torah : Nombres',
              description:
                "Aujourd'hui est votre dernier jour dans le livre des nombres ! Regardez un récapitulatif animé de ce que vous avez couvert.",
              url: 'https://www.youtube.com/watch?v=zebxH-5o-SQ',
            },
            { id: '1', src: '04', type: 'Image' },
            { id: '2', chapters: '4|35-36', type: 'Chapter' },
            {
              id: '3',
              chapters: '19|52',
              type: 'Chapter',
              subType: 'pray',
            },
          ],
        },
      ],
    },
    {
      id: '6',
      title: 'La terre promise',
      subTitle: 'Josué, Juges',
      image: 'grape',
      readingSlices: [
        {
          id: '27',
          slices: [
            {
              id: '0',
              type: 'Video',
              title: 'Vidéo : Josué',
              description:
                "Après la mort de Moïse, Josué conduit les Israélites dans le pays que Dieu a promis à Abraham et les aide à vaincre les Cananéens. Les Israélites s'installent dans le pays et sont mis au défi d'être fidèles à Dieu.",
              url: 'https://www.youtube.com/watch?v=3r38RWz3k4c',
            },
            { id: '1', src: '06', type: 'Image' },
            { id: '2', chapters: '6|1-4', type: 'Chapter' },
            {
              id: '3',
              chapters: '19|65',
              type: 'Chapter',
              subType: 'pray',
            },
          ],
        },
        {
          id: '28',
          slices: [
            { id: '0', src: '06', type: 'Image' },
            { id: '1', chapters: '6|22-24', type: 'Chapter' },
            {
              id: '2',
              chapters: '19|69',
              type: 'Chapter',
              subType: 'pray',
            },
          ],
        },
        {
          id: '29',
          slices: [
            {
              id: '0',
              type: 'Video',
              title: 'Vidéo : Juges',
              description:
                "Après la mort de Josué, les Israélites se sont détournés de Dieu et ont rompu l'alliance. C'est le début d'un cycle de rébellion, de repentance et de restauration, alors que Dieu reste patiemment engagé envers un peuple infidèle.",
              url: 'https://www.youtube.com/watch?v=CJhCzmboXSQ',
            },
            { id: '1', src: '07', type: 'Image' },
            { id: '2', chapters: '7|1-3', type: 'Chapter' },
            {
              id: '3',
              chapters: '19|70',
              type: 'Chapter',
              subType: 'pray',
            },
          ],
        },
        {
          id: '132',
          slices: [
            { id: '0', src: '06', type: 'Image' },
            { id: '1', chapters: '6|5-8', type: 'Chapter' },
            {
              id: '2',
              chapters: '19|66',
              type: 'Chapter',
              subType: 'pray',
            },
          ],
        },
        {
          id: '133',
          slices: [
            { id: '0', src: '06', type: 'Image' },
            { id: '1', chapters: '6|9-12', type: 'Chapter' },
            {
              id: '2',
              chapters: '19|67',
              type: 'Chapter',
              subType: 'pray',
            },
          ],
        },
        {
          id: '134',
          slices: [
            { id: '0', src: '06', type: 'Image' },
            { id: '1', chapters: '6|13-21', type: 'Chapter' },
            {
              id: '2',
              chapters: '19|68',
              type: 'Chapter',
              subType: 'pray',
            },
          ],
        },
        {
          id: '135',
          slices: [
            { id: '0', src: '07', type: 'Image' },
            { id: '1', chapters: '7|4-5', type: 'Chapter' },
            {
              id: '2',
              chapters: '19|71',
              type: 'Chapter',
              subType: 'pray',
            },
          ],
        },
        {
          id: '136',
          slices: [
            { id: '0', src: '07', type: 'Image' },
            { id: '1', chapters: '7|6-8', type: 'Chapter' },
            {
              id: '2',
              chapters: '19|72',
              type: 'Chapter',
              subType: 'pray',
            },
          ],
        },
        {
          id: '137',
          slices: [
            { id: '0', src: '07', type: 'Image' },
            { id: '1', chapters: '7|9-12', type: 'Chapter' },
            {
              id: '2',
              chapters: '19|73',
              type: 'Chapter',
              subType: 'pray',
            },
          ],
        },
        {
          id: '138',
          slices: [
            { id: '0', src: '07', type: 'Image' },
            { id: '1', chapters: '7|13-15', type: 'Chapter' },
            {
              id: '2',
              chapters: '19|74',
              type: 'Chapter',
              subType: 'pray',
            },
          ],
        },
        {
          id: '139',
          slices: [
            { id: '0', src: '07', type: 'Image' },
            { id: '1', chapters: '7|16-18', type: 'Chapter' },
            {
              id: '2',
              chapters: '19|75',
              type: 'Chapter',
              subType: 'pray',
            },
          ],
        },
        {
          id: '140',
          slices: [
            { id: '0', src: '07', type: 'Image' },
            { id: '1', chapters: '7|19-21', type: 'Chapter' },
            {
              id: '2',
              chapters: '19|76',
              type: 'Chapter',
              subType: 'pray',
            },
          ],
        },
      ],
    },
    {
      id: '7',
      title: "La montée et la chute du royaume d'Israël",
      subTitle: 'Ruth - 2 Rois',
      image: 'city',
      readingSlices: [
        {
          id: '30',
          slices: [
            {
              id: '0',
              type: 'Video',
              title: 'Vidéo : Ruth',
              description:
                "Une famille israélite est frappée par une série de morts tragiques, et Dieu pourvoit mystérieusement aux besoins des veuves grâce aux actes généreux d'un fermier israélite. L'histoire explore comment Dieu peut utiliser toutes les expériences de la vie dans le cadre de son plan pour bénir et racheter son peuple.",
              url: 'https://www.youtube.com/watch?v=vwh7UOJYCGw',
            },
            { id: '1', src: '10', type: 'Image' },
            { id: '2', chapters: '8|1-4', type: 'Chapter' },
            {
              id: '3',
              chapters: '19|77',
              type: 'Chapter',
              subType: 'pray',
            },
          ],
        },
        {
          id: '31',
          slices: [
            {
              id: '0',
              type: 'Video',
              title: 'Vidéo : 1 Samuel',
              description:
                "Dieu élève Samuel pour diriger Israël dans une période désespérée, qui mène finalement à l'avènement du royaume en Israël. Le premier roi d'Israël, Saül, est un misérable échec et est remplacé par l'humble et fidèle David qui s'élève vers la grandeur.",
              url: 'https://www.youtube.com/watch?v=IfyG_XDWZBU',
            },
            { id: '1', src: '11', type: 'Image' },
            { id: '2', chapters: '9|1-3', type: 'Chapter' },
            {
              id: '3',
              chapters: '19|78',
              type: 'Chapter',
              subType: 'pray',
            },
          ],
        },
        {
          id: '32',
          slices: [
            {
              id: '0',
              type: 'Video',
              title: 'Vidéo : 2 Samuel',
              description:
                "David devient le roi le plus fidèle de Dieu, mais se rebelle ensuite, ce qui entraîne la lente destruction de sa famille et de son royaume. L'histoire offre un portrait à plusieurs facettes du roi le plus célèbre d'Israël comme une étude de cas dans la nature humaine.",
              url: 'https://www.youtube.com/watch?v=a8yoTzGxOTU',
            },
            { id: '1', src: '12', type: 'Image' },
            { id: '2', chapters: '10|1-3', type: 'Chapter' },
            {
              id: '3',
              chapters: '19|87',
              type: 'Chapter',
              subType: 'pray',
            },
          ],
        },
        {
          id: '33',
          slices: [
            {
              id: '0',
              type: 'Video',
              title: 'Vidéo : 1 & 2 Rois',
              description:
                "Après David, Salomon conduit Israël dans une période de grandeur, suivie d'un échec et d'une rébellion. Israël se divise en deux royaumes distincts, et l'histoire retrace le lent déclin des deux, qui se traduit par la destruction aux mains d'empires étrangers. Dieu envoie des vagues de prophètes pour demander des comptes à Israël, mais Israël les ignore, à ses risques et périls.",
              url: 'https://www.youtube.com/watch?v=uNfWBrrMn4Y',
            },
            { id: '1', src: '13', type: 'Image' },
            { id: '2', chapters: '11|1-3', type: 'Chapter' },
            {
              id: '3',
              chapters: '19|94',
              type: 'Chapter',
              subType: 'pray',
            },
          ],
        },
        {
          id: '34',
          slices: [
            { id: '0', src: '13', type: 'Image' },
            { id: '1', chapters: '11|4-7', type: 'Chapter' },
            {
              id: '2',
              chapters: '19|95',
              type: 'Chapter',
              subType: 'pray',
            },
          ],
        },
        {
          id: '109',
          slices: [
            { id: '0', src: '12', type: 'Image' },
            { id: '1', chapters: '10|9-12', type: 'Chapter' },
            {
              id: '2',
              chapters: '19|89',
              type: 'Chapter',
              subType: 'pray',
            },
          ],
        },
        {
          id: '141',
          slices: [
            { id: '0', src: '11', type: 'Image' },
            { id: '1', chapters: '9|4-8', type: 'Chapter' },
            {
              id: '2',
              chapters: '19|79',
              type: 'Chapter',
              subType: 'pray',
            },
          ],
        },
        {
          id: '142',
          slices: [
            { id: '0', src: '11', type: 'Image' },
            { id: '1', chapters: '9|9-12', type: 'Chapter' },
            {
              id: '2',
              chapters: '19|80',
              type: 'Chapter',
              subType: 'pray',
            },
          ],
        },
        {
          id: '143',
          slices: [
            { id: '0', src: '11', type: 'Image' },
            { id: '1', chapters: '9|13-14', type: 'Chapter' },
            {
              id: '2',
              chapters: '19|81',
              type: 'Chapter',
              subType: 'pray',
            },
          ],
        },
        {
          id: '144',
          slices: [
            { id: '0', src: '11', type: 'Image' },
            { id: '1', chapters: '9|15-17', type: 'Chapter' },
            {
              id: '2',
              chapters: '19|82',
              type: 'Chapter',
              subType: 'pray',
            },
          ],
        },
        {
          id: '145',
          slices: [
            { id: '0', src: '11', type: 'Image' },
            { id: '1', chapters: '9|18-20', type: 'Chapter' },
            {
              id: '2',
              chapters: '19|83',
              type: 'Chapter',
              subType: 'pray',
            },
          ],
        },
        {
          id: '146',
          slices: [
            { id: '0', src: '11', type: 'Image' },
            { id: '1', chapters: '9|21-24', type: 'Chapter' },
            {
              id: '2',
              chapters: '19|84',
              type: 'Chapter',
              subType: 'pray',
            },
          ],
        },
        {
          id: '147',
          slices: [
            { id: '0', src: '11', type: 'Image' },
            { id: '1', chapters: '9|25-27', type: 'Chapter' },
            {
              id: '2',
              chapters: '19|85',
              type: 'Chapter',
              subType: 'pray',
            },
          ],
        },
        {
          id: '148',
          slices: [
            { id: '0', src: '11', type: 'Image' },
            { id: '1', chapters: '9|28-31', type: 'Chapter' },
            {
              id: '2',
              chapters: '19|86',
              type: 'Chapter',
              subType: 'pray',
            },
          ],
        },
        {
          id: '149',
          slices: [
            {
              id: '0',
              type: 'Video',
              title: 'Vidéo : Le Messie',
              description:
                'Le Messie : En savoir plus sur la promesse de Jacob à Juda concernant le futur roi',
              url: 'https://www.youtube.com/watch?v=4eBBvA8zzxI',
            },
            { id: '1', src: '12', type: 'Image' },
            { id: '2', chapters: '10|4-8', type: 'Chapter' },
            {
              id: '3',
              chapters: '19|88',
              type: 'Chapter',
              subType: 'pray',
            },
          ],
        },
        {
          id: '150',
          slices: [
            { id: '0', src: '12', type: 'Image' },
            { id: '1', chapters: '10|13-15', type: 'Chapter' },
            {
              id: '2',
              chapters: '19|90',
              type: 'Chapter',
              subType: 'pray',
            },
          ],
        },
        {
          id: '151',
          slices: [
            { id: '0', src: '12', type: 'Image' },
            { id: '1', chapters: '10|16-18', type: 'Chapter' },
            {
              id: '2',
              chapters: '19|91',
              type: 'Chapter',
              subType: 'pray',
            },
          ],
        },
        {
          id: '152',
          slices: [
            { id: '0', src: '12', type: 'Image' },
            { id: '1', chapters: '10|19-21', type: 'Chapter' },
            {
              id: '2',
              chapters: '19|92',
              type: 'Chapter',
              subType: 'pray',
            },
          ],
        },
        {
          id: '153',
          slices: [
            { id: '0', src: '12', type: 'Image' },
            { id: '1', chapters: '10|22-24', type: 'Chapter' },
            {
              id: '2',
              chapters: '19|93',
              type: 'Chapter',
              subType: 'pray',
            },
          ],
        },
        {
          id: '154',
          slices: [
            { id: '0', src: '13', type: 'Image' },
            { id: '1', chapters: '11|8-10', type: 'Chapter' },
            {
              id: '2',
              chapters: '19|96',
              type: 'Chapter',
              subType: 'pray',
            },
          ],
        },
        {
          id: '155',
          slices: [
            { id: '0', src: '13', type: 'Image' },
            { id: '1', chapters: '11|11-13', type: 'Chapter' },
            {
              id: '2',
              chapters: '19|97',
              type: 'Chapter',
              subType: 'pray',
            },
          ],
        },
        {
          id: '156',
          slices: [
            { id: '0', src: '13', type: 'Image' },
            { id: '1', chapters: '11|14-16', type: 'Chapter' },
            {
              id: '2',
              chapters: '19|98',
              type: 'Chapter',
              subType: 'pray',
            },
          ],
        },
        {
          id: '157',
          slices: [
            { id: '0', src: '13', type: 'Image' },
            { id: '1', chapters: '11|17-19', type: 'Chapter' },
            {
              id: '2',
              chapters: '19|99',
              type: 'Chapter',
              subType: 'pray',
            },
          ],
        },
        {
          id: '158',
          slices: [
            { id: '0', src: '13', type: 'Image' },
            { id: '1', chapters: '12|1-3', type: 'Chapter' },
            {
              id: '2',
              chapters: '19|101',
              type: 'Chapter',
              subType: 'pray',
            },
          ],
        },
        {
          id: '159',
          slices: [
            { id: '0', src: '13', type: 'Image' },
            { id: '1', chapters: '11|20-22', type: 'Chapter' },
            {
              id: '2',
              chapters: '19|100',
              type: 'Chapter',
              subType: 'pray',
            },
          ],
        },
        {
          id: '160',
          slices: [
            { id: '0', src: '13', type: 'Image' },
            { id: '1', chapters: '12|8-11', type: 'Chapter' },
            {
              id: '2',
              chapters: '19|103',
              type: 'Chapter',
              subType: 'pray',
            },
          ],
        },
        {
          id: '161',
          slices: [
            { id: '0', src: '13', type: 'Image' },
            { id: '1', chapters: '12|4-7', type: 'Chapter' },
            {
              id: '2',
              chapters: '19|102',
              type: 'Chapter',
              subType: 'pray',
            },
          ],
        },
        {
          id: '162',
          slices: [
            { id: '0', src: '13', type: 'Image' },
            { id: '1', chapters: '12|12-14', type: 'Chapter' },
            {
              id: '2',
              chapters: '19|104',
              type: 'Chapter',
              subType: 'pray',
            },
          ],
        },
        {
          id: '163',
          slices: [
            { id: '0', src: '13', type: 'Image' },
            { id: '1', chapters: '12|15-17', type: 'Chapter' },
            {
              id: '2',
              chapters: '19|105',
              type: 'Chapter',
              subType: 'pray',
            },
          ],
        },
        {
          id: '164',
          slices: [
            { id: '0', src: '13', type: 'Image' },
            { id: '1', chapters: '12|18-19', type: 'Chapter' },
            {
              id: '2',
              chapters: '19|106',
              type: 'Chapter',
              subType: 'pray',
            },
          ],
        },
        {
          id: '165',
          slices: [
            { id: '0', src: '13', type: 'Image' },
            { id: '1', chapters: '12|20-22', type: 'Chapter' },
            {
              id: '2',
              chapters: '19|107',
              type: 'Chapter',
              subType: 'pray',
            },
          ],
        },
        {
          id: '166',
          slices: [
            { id: '0', src: '13', type: 'Image' },
            { id: '1', chapters: '12|23-25', type: 'Chapter' },
            {
              id: '2',
              chapters: '19|108',
              type: 'Chapter',
              subType: 'pray',
            },
          ],
        },
      ],
    },
    {
      id: '8',
      title: "Les prophètes avant l'Exode",
      subTitle: 'Ésaïe - Sophonie',
      image: 'lion',
      readingSlices: [
        {
          id: '35',
          slices: [
            {
              id: '0',
              type: 'Video',
              title: 'Vidéo : Esaïe 1-39',
              description:
                "Esaïe annonce un message de jugement sur l'échec d'Israël à respecter son alliance avec Dieu. Il purifiera Israël pour le préparer à la venue du roi messianique qui a trouvé la nouvelle Jérusalem pour devenir une lumière pour les nations. Mais tous ces espoirs semblent s'effondrer avec l'exil d'Israël. Comment ces promesses seront-elles tenues ?",
              url: 'https://www.youtube.com/watch?v=eOmd1d-6Whw',
            },
            { id: '1', src: '22', type: 'Image' },
            { id: '2', chapters: '23|1-4', type: 'Chapter' },
            {
              id: '3',
              chapters: '19|109',
              type: 'Chapter',
              subType: 'pray',
            },
          ],
        },
        {
          id: '36',
          slices: [
            { id: '0', src: '22', type: 'Image' },
            { id: '1', chapters: '23|5-8', type: 'Chapter' },
            {
              id: '2',
              chapters: '19|110',
              type: 'Chapter',
              subType: 'pray',
            },
          ],
        },
        {
          id: '37',
          slices: [
            {
              id: '0',
              type: 'Video',
              title: 'Vidéo : Esaïe 40-66',
              description:
                "De l'autre côté de l'exil d'Israël, l'espoir d'Isaïe pour la nouvelle Jérusalem et le roi messianique est annoncé. Il est alors révélé qu'Israël est toujours aussi dur après l'exil, et que leur roi deviendra un serviteur souffrant qui mourra pour les péchés d'Israël et ouvrira la famille de l'alliance de Dieu à toutes les nations.",
              url: 'https://www.youtube.com/watch?v=ztaPgwQ5j8k',
            },
            { id: '1', src: '23', type: 'Image' },
            { id: '2', chapters: '23|39-41', type: 'Chapter' },
            {
              id: '3',
              chapters: '19|118',
              type: 'Chapter',
              subType: 'pray',
            },
          ],
        },
        {
          id: '38',
          slices: [
            {
              id: '0',
              type: 'Video',
              title: "Vidéo : L'Évangile du Royaume",
              description:
                "Bien que le royaume d'Israël soit actuellement en déclin, le prophète Esaïe attend avec impatience la venue d'un messager qui apportera \"l'évangile du royaume\". Ce thème est essentiel pour comprendre la bonne nouvelle que Jésus a apportée dans le Nouveau Testament, alors regardez cette vidéo.",
              url: 'https://www.youtube.com/watch?v=txGfRrR9v_M',
            },
            { id: '1', src: '23', type: 'Image' },
            { id: '2', chapters: '23|52-54', type: 'Chapter' },
            {
              id: '3',
              verses: '19|119:97-128',
              type: 'Verse',
              subType: 'pray',
            },
          ],
        },
        {
          id: '39',
          slices: [
            {
              id: '0',
              type: 'Video',
              title: 'Vidéo : Osée',
              description:
                "Osée accuse Israël de rompre son alliance avec Dieu, et les avertit des conséquences tragiques qui s'ensuivront. Mais parce que la miséricorde de Dieu et l'amour de l'alliance sont plus puissants que le péché d'Israël, Osée annonce également l'espoir pour l'avenir d'Israël après l'exil.",
              url: 'https://www.youtube.com/watch?v=cFUsMnQe1Ts',
            },
            { id: '1', src: '29', type: 'Image' },
            { id: '2', chapters: '28|1-5', type: 'Chapter' },
            {
              id: '3',
              chapters: '19|122',
              type: 'Chapter',
              subType: 'pray',
            },
          ],
        },
        {
          id: '40',
          slices: [
            {
              id: '0',
              type: 'Video',
              title: 'Vidéo : Joël',
              description:
                'Joel considère une récente invasion de criquets comme une expression du "jour de la justice du Seigneur" pour le péché d\'Israël. Mais sa réflexion sur les Ecritures le conduit à croire que la vraie repentance apportera la grande restauration espérée dans les autres livres prophétiques. Pour Joël, le passé est devenu une image de l\'avenir.',
              url: 'https://www.youtube.com/watch?v=KyfKz8DrhVk',
            },
            { id: '1', src: '30', type: 'Image' },
            { id: '2', chapters: '29|1-3', type: 'Chapter' },
            {
              id: '3',
              chapters: '19|125',
              type: 'Chapter',
              subType: 'pray',
            },
          ],
        },
        {
          id: '41',
          slices: [
            {
              id: '0',
              type: 'Video',
              title: 'Vidéo : Amos',
              description:
                "Amos accuse Israël de rompre son alliance avec Dieu, et souligne comment leur idolâtrie a conduit à l'injustice et à la négligence des pauvres. Amos avertit de la justice à venir de Dieu sur leur péché, et les met au défi que le vrai culte de Dieu mènera toujours à la justice pour les pauvres. Le livre se termine par une promesse du royaume messianique de l'autre côté du jugement de Dieu.",
              url: 'https://www.youtube.com/watch?v=8sRTnbX_TJY',
            },
            { id: '1', src: '31', type: 'Image' },
            { id: '2', chapters: '30|1-5', type: 'Chapter' },
            {
              id: '3',
              chapters: '19|126',
              type: 'Chapter',
              subType: 'pray',
            },
          ],
        },
        {
          id: '42',
          slices: [
            {
              id: '0',
              type: 'Video',
              title: 'Vidéo : Abdias',
              description:
                "Abdias accuse la nation d'Édom, voisin et parent d'Israël, de violence et d'injustice. Mais la chute d'Édom devant Babylone devient une image de la façon dont Dieu fera un jour tomber toutes les nations arrogantes et violentes et établira sur elles son royaume de justice.",
              url: 'https://www.youtube.com/watch?v=RgTE--fi8m0',
            },
            { id: '1', src: '32', type: 'Image' },
            { id: '2', chapters: '31|1', type: 'Chapter' },
            {
              id: '3',
              chapters: '19|128',
              type: 'Chapter',
              subType: 'pray',
            },
          ],
        },
        {
          id: '43',
          slices: [
            {
              id: '0',
              type: 'Video',
              title: 'Vidéo : Michée',
              description:
                "Michée annonce que la justice de Dieu s'abat sur le péché d'Israël et l'échec de l'alliance. Mais leur péché n'est pas le dernier mot, car l'amour et la fidélité à l'alliance de Dieu créeront un nouvel avenir de l'autre côté du péché et de l'exil d'Israël.",
              url: 'https://www.youtube.com/watch?v=dmS-4-0cx5g',
            },
            { id: '1', src: '34', type: 'Image' },
            { id: '2', chapters: '33|1-4', type: 'Chapter' },
            {
              id: '3',
              chapters: '19|130',
              type: 'Chapter',
              subType: 'pray',
            },
          ],
        },
        {
          id: '44',
          slices: [
            {
              id: '0',
              type: 'Video',
              title: 'Vidéo : Jonas',
              description:
                "Une histoire subversive sur un prophète rebelle qui déteste son Dieu parce qu'il aime ses ennemis. Le comportement ridicule de Jonas contraste avec le repentir tendre des Gentils dans cette histoire, et devient ainsi la façon de l'auteur de mettre le lecteur au défi de tenir compte de l'amour de Dieu pour ses ennemis également.",
              url: 'https://www.youtube.com/watch?v=DNjuAr9c7VU',
            },
            { id: '1', src: '33', type: 'Image' },
            { id: '2', chapters: '32|1-4', type: 'Chapter' },
            {
              id: '3',
              chapters: '19|129',
              type: 'Chapter',
              subType: 'pray',
            },
          ],
        },
        {
          id: '45',
          slices: [
            {
              id: '0',
              type: 'Video',
              title: 'Vidéo : Nahum',
              description:
                "Nahum dépeint la chute de Ninive et de l'Assyrie comme une image de la façon dont Dieu affrontera et fera tomber tous les empires humains violents. Son message de justice contre Ninive nous met au défi de l'humilité et de l'espoir pour l'avenir du monde de Dieu.",
              url: 'https://www.youtube.com/watch?v=7rBdJ1JZo9A',
            },
            { id: '1', src: '35', type: 'Image' },
            { id: '2', chapters: '34|1-3', type: 'Chapter' },
            {
              id: '3',
              chapters: '19|132',
              type: 'Chapter',
              subType: 'pray',
            },
          ],
        },
        {
          id: '46',
          slices: [
            {
              id: '0',
              type: 'Video',
              title: 'Vidéo : Habacuc',
              description:
                "Habacuc lutte pour comprendre la bonté de Dieu au milieu de tant de mal et d'injustice dans le monde. Dieu annonce qu'il fera tomber Babylone et toutes les nations qui agissent comme Babylone et qu'il fera venir son royaume et le messie dans le futur. Habacuc devient ainsi un exemple du peuple juste de Dieu qui vit par la foi en ses promesses de sauver son monde.",
              url: 'https://www.youtube.com/watch?v=lBQbCKsvwCI',
            },
            { id: '1', src: '36', type: 'Image' },
            { id: '2', chapters: '35|1-3', type: 'Chapter' },
            {
              id: '3',
              chapters: '19|133',
              type: 'Chapter',
              subType: 'pray',
            },
          ],
        },
        {
          id: '47',
          slices: [
            {
              id: '0',
              type: 'Video',
              title: 'Vidéo : Sophonie',
              description:
                "Sophonie annonce le jugement à venir de Dieu sur l'injustice et l'infidélité d'Israël à l'égard de l'alliance. Il dévastera Jérusalem et mettra fin à l'exil. Mais l'amour et la miséricorde de Dieu perdureront, et Sophonie voit donc dans ce jugement purificateur la véritable espérance du monde, car Dieu crée un monde où tous les peuples peuvent s'épanouir dans la sécurité et la paix.",
              url: 'https://www.youtube.com/watch?v=oiTxzjDvjgk',
            },
            { id: '1', src: '37', type: 'Image' },
            { id: '2', chapters: '36|1-3', type: 'Chapter' },
            {
              id: '3',
              chapters: '19|134',
              type: 'Chapter',
              subType: 'pray',
            },
          ],
        },
        {
          id: '167',
          slices: [
            { id: '0', src: '22', type: 'Image' },
            { id: '1', chapters: '23|9-12', type: 'Chapter' },
            {
              id: '2',
              chapters: '19|111',
              type: 'Chapter',
              subType: 'pray',
            },
          ],
        },
        {
          id: '168',
          slices: [
            { id: '0', src: '22', type: 'Image' },
            { id: '1', chapters: '23|13-17', type: 'Chapter' },
            {
              id: '2',
              chapters: '19|112',
              type: 'Chapter',
              subType: 'pray',
            },
          ],
        },
        {
          id: '169',
          slices: [
            { id: '0', src: '22', type: 'Image' },
            { id: '1', chapters: '23|18-22', type: 'Chapter' },
            {
              id: '2',
              chapters: '19|113',
              type: 'Chapter',
              subType: 'pray',
            },
          ],
        },
        {
          id: '170',
          slices: [
            { id: '0', src: '22', type: 'Image' },
            { id: '1', chapters: '23|23-27', type: 'Chapter' },
            {
              id: '2',
              chapters: '19|114',
              type: 'Chapter',
              subType: 'pray',
            },
          ],
        },
        {
          id: '171',
          slices: [
            { id: '0', src: '22', type: 'Image' },
            { id: '1', chapters: '23|28-30', type: 'Chapter' },
            {
              id: '2',
              chapters: '19|115',
              type: 'Chapter',
              subType: 'pray',
            },
          ],
        },
        {
          id: '172',
          slices: [
            { id: '0', src: '22', type: 'Image' },
            { id: '1', chapters: '23|31-35', type: 'Chapter' },
            {
              id: '2',
              chapters: '19|116',
              type: 'Chapter',
              subType: 'pray',
            },
          ],
        },
        {
          id: '173',
          slices: [
            { id: '0', src: '22', type: 'Image' },
            { id: '1', chapters: '23|36-38', type: 'Chapter' },
            {
              id: '2',
              chapters: '19|117',
              type: 'Chapter',
              subType: 'pray',
            },
          ],
        },
        {
          id: '174',
          slices: [
            { id: '0', src: '23', type: 'Image' },
            { id: '1', chapters: '23|42-44', type: 'Chapter' },
            {
              id: '2',
              verses: '19|119:1-32',
              type: 'Verse',
              subType: 'pray',
            },
          ],
        },
        {
          id: '175',
          slices: [
            { id: '0', src: '23', type: 'Image' },
            { id: '1', chapters: '23|45-48', type: 'Chapter' },
            {
              id: '2',
              verses: '19|119:33-64',
              type: 'Verse',
              subType: 'pray',
            },
          ],
        },
        {
          id: '176',
          slices: [
            { id: '0', src: '23', type: 'Image' },
            { id: '1', chapters: '23|49-51', type: 'Chapter' },
            {
              id: '2',
              verses: '19|119:65-96',
              type: 'Verse',
              subType: 'pray',
            },
          ],
        },
        {
          id: '177',
          slices: [
            { id: '0', src: '23', type: 'Image' },
            { id: '1', chapters: '23|55-57', type: 'Chapter' },
            {
              id: '2',
              verses: '19|119:129-152',
              type: 'Verse',
              subType: 'pray',
            },
          ],
        },
        {
          id: '178',
          slices: [
            { id: '0', src: '23', type: 'Image' },
            { id: '1', chapters: '23|58-60', type: 'Chapter' },
            {
              id: '2',
              verses: '19|119:153-176',
              type: 'Verse',
              subType: 'pray',
            },
          ],
        },
        {
          id: '179',
          slices: [
            { id: '0', src: '23', type: 'Image' },
            { id: '1', chapters: '23|61-64', type: 'Chapter' },
            {
              id: '2',
              chapters: '19|120',
              type: 'Chapter',
              subType: 'pray',
            },
          ],
        },
        {
          id: '180',
          slices: [
            { id: '0', src: '23', type: 'Image' },
            { id: '1', chapters: '23|65-66', type: 'Chapter' },
            {
              id: '2',
              chapters: '19|121',
              type: 'Chapter',
              subType: 'pray',
            },
          ],
        },
        {
          id: '181',
          slices: [
            { id: '0', src: '29', type: 'Image' },
            { id: '1', chapters: '28|6-10', type: 'Chapter' },
            {
              id: '2',
              chapters: '19|123',
              type: 'Chapter',
              subType: 'pray',
            },
          ],
        },
        {
          id: '182',
          slices: [
            { id: '0', src: '29', type: 'Image' },
            { id: '1', chapters: '28|11-14', type: 'Chapter' },
            {
              id: '2',
              chapters: '19|124',
              type: 'Chapter',
              subType: 'pray',
            },
          ],
        },
        {
          id: '183',
          slices: [
            { id: '0', src: '31', type: 'Image' },
            { id: '1', chapters: '30|6-9', type: 'Chapter' },
            {
              id: '2',
              chapters: '19|127',
              type: 'Chapter',
              subType: 'pray',
            },
          ],
        },
        {
          id: '184',
          slices: [
            { id: '0', src: '34', type: 'Image' },
            { id: '1', chapters: '33|5-7', type: 'Chapter' },
            {
              id: '2',
              chapters: '19|131',
              type: 'Chapter',
              subType: 'pray',
            },
          ],
        },
      ],
    },
    {
      id: '9',
      title: "La Sagesse d'Israël",
      subTitle: 'Job - Cantique des cantiques',
      image: 'messiah',
      readingSlices: [
        {
          id: '48',
          slices: [
            {
              id: '0',
              type: 'Video',
              title: 'Vidéo : Job',
              description:
                "Le livre de Job explore la difficile question de la relation de Dieu à la souffrance humaine. Et bien qu'il n'offre pas de réponses toutes faites, il nous invite à de nouveaux niveaux de confiance dans la sagesse et le caractère de Dieu.",
              url: 'https://www.youtube.com/watch?v=xRQ5ctHjhBs',
            },
            { id: '1', src: '17', type: 'Image' },
            { id: '2', chapters: '18|1-3', type: 'Chapter' },
            {
              id: '3',
              chapters: '19|135',
              type: 'Chapter',
              subType: 'pray',
            },
          ],
        },
        {
          id: '49',
          slices: [
            {
              id: '0',
              type: 'Video',
              title: 'Vidéo : Ecclésiaste',
              description:
                "L'Ecclésiaste démantèle nos idées simplistes sur Dieu et notre vie, en montrant que la mort, le hasard et le passage du temps rendent impossible le contrôle des résultats de la vie. Mais cette nature imprévisible de la vie ouvre en fait la voie à la sagesse et à la crainte du Seigneur.",
              url: 'https://www.youtube.com/watch?v=VURWsXy1nww',
            },
            { id: '1', src: '20', type: 'Image' },
            { id: '2', chapters: '21|1-4', type: 'Chapter' },
            {
              id: '3',
              chapters: '19|8',
              type: 'Chapter',
              subType: 'pray',
            },
          ],
        },
        {
          id: '79',
          slices: [
            {
              id: '0',
              type: 'Video',
              title: 'Vidéo : Psaumes',
              description:
                "Le livre des Psaumes a été conçu pour être le livre de prières du peuple de Dieu qui essaie d'être fidèle à Dieu dans l'attente du messie et de son royaume à venir.",
              url: 'https://www.youtube.com/watch?v=T-DvRiiLS1Y',
            },
            { id: '1', chapters: '19|1-2', type: 'Chapter' },
            {
              id: '2',
              chapters: '19|147',
              type: 'Chapter',
              subType: 'pray',
            },
          ],
        },
        {
          id: '80',
          slices: [
            {
              id: '0',
              type: 'Video',
              title: 'Vidéo : Cantique des cantiques',
              description:
                "Le Cantique des cantiques est un recueil d'anciens poèmes d'amour israélites qui célèbre la beauté et la puissance du don d'amour et de désir sexuel de Dieu.",
              url: 'https://www.youtube.com/watch?v=YE-TO4LMbtQ',
            },
            { id: '1', src: '21', type: 'Image' },
            { id: '2', chapters: '22|1-4', type: 'Chapter' },
            {
              id: '3',
              chapters: '19|11',
              type: 'Chapter',
              subType: 'pray',
            },
          ],
        },
        {
          id: '110',
          slices: [
            { id: '0', src: '19', type: 'Image' },
            { id: '1', chapters: '20|4-6', type: 'Chapter' },
            {
              id: '2',
              chapters: '19|149',
              type: 'Chapter',
              subType: 'pray',
            },
          ],
        },
        {
          id: '185',
          slices: [
            { id: '0', src: '17', type: 'Image' },
            { id: '1', chapters: '18|4-7', type: 'Chapter' },
            {
              id: '2',
              chapters: '19|136',
              type: 'Chapter',
              subType: 'pray',
            },
          ],
        },
        {
          id: '186',
          slices: [
            { id: '0', src: '17', type: 'Image' },
            { id: '1', chapters: '18|8-11', type: 'Chapter' },
            {
              id: '2',
              chapters: '19|137',
              type: 'Chapter',
              subType: 'pray',
            },
          ],
        },
        {
          id: '187',
          slices: [
            { id: '0', src: '17', type: 'Image' },
            { id: '1', chapters: '18|12-15', type: 'Chapter' },
            {
              id: '2',
              chapters: '19|138',
              type: 'Chapter',
              subType: 'pray',
            },
          ],
        },
        {
          id: '188',
          slices: [
            { id: '0', src: '17', type: 'Image' },
            { id: '1', chapters: '18|16-19', type: 'Chapter' },
            {
              id: '2',
              chapters: '19|139',
              type: 'Chapter',
              subType: 'pray',
            },
          ],
        },
        {
          id: '189',
          slices: [
            { id: '0', src: '17', type: 'Image' },
            { id: '1', chapters: '18|20-23', type: 'Chapter' },
            {
              id: '2',
              chapters: '19|140',
              type: 'Chapter',
              subType: 'pray',
            },
          ],
        },
        {
          id: '190',
          slices: [
            { id: '0', src: '17', type: 'Image' },
            { id: '1', chapters: '18|24-28', type: 'Chapter' },
            {
              id: '2',
              chapters: '19|141',
              type: 'Chapter',
              subType: 'pray',
            },
          ],
        },
        {
          id: '191',
          slices: [
            { id: '0', src: '17', type: 'Image' },
            { id: '1', chapters: '18|29-31', type: 'Chapter' },
            {
              id: '2',
              chapters: '19|142',
              type: 'Chapter',
              subType: 'pray',
            },
          ],
        },
        {
          id: '192',
          slices: [
            {
              id: '0',
              type: 'Video',
              title: 'Sagesse : Job',
              description:
                'Vous avez presque terminé le livre de Job ! Regardez cette vidéo qui met en évidence la place des livres dans la tradition de la littérature de sagesse en Israël.',
              url: 'https://www.youtube.com/watch?v=m8gavTyySCk',
            },
            { id: '1', src: '17', type: 'Image' },
            { id: '2', chapters: '18|32-34', type: 'Chapter' },
            {
              id: '3',
              chapters: '19|143',
              type: 'Chapter',
              subType: 'pray',
            },
          ],
        },
        {
          id: '193',
          slices: [
            { id: '0', src: '17', type: 'Image' },
            { id: '1', chapters: '18|35-37', type: 'Chapter' },
            {
              id: '2',
              chapters: '19|144',
              type: 'Chapter',
              subType: 'pray',
            },
          ],
        },
        {
          id: '194',
          slices: [
            { id: '0', src: '17', type: 'Image' },
            { id: '1', chapters: '18|38-39', type: 'Chapter' },
            {
              id: '2',
              chapters: '19|145',
              type: 'Chapter',
              subType: 'pray',
            },
          ],
        },
        {
          id: '195',
          slices: [
            { id: '0', src: '17', type: 'Image' },
            { id: '1', chapters: '18|40-42', type: 'Chapter' },
            {
              id: '2',
              chapters: '19|146',
              type: 'Chapter',
              subType: 'pray',
            },
          ],
        },
        {
          id: '196',
          slices: [
            {
              id: '0',
              type: 'Video',
              title: 'Vidéo : Proverbes',
              description:
                'Proverbes explore ce que signifie vivre bien dans le monde de Dieu, en utilisant la sagesse et la crainte du Seigneur comme guide.',
              url: 'https://www.youtube.com/watch?v=onMgVuZ4q0Q',
            },
            { id: '1', src: '19', type: 'Image' },
            { id: '2', chapters: '20|1-3', type: 'Chapter' },
            {
              id: '3',
              chapters: '19|148',
              type: 'Chapter',
              subType: 'pray',
            },
          ],
        },
        {
          id: '197',
          slices: [
            {
              id: '0',
              type: 'Video',
              title: 'Sagesse : Proverbes',
              description:
                'Le livre des Proverbes occupe une place unique dans la tradition de la littérature de sagesse en Israël. Regardez cette vidéo pour voir où il se situe.',
              url: 'https://www.youtube.com/watch?v=onMgVuZ4q0Q',
            },
            { id: '1', src: '19', type: 'Image' },
            { id: '2', chapters: '20|7-9', type: 'Chapter' },
            {
              id: '3',
              chapters: '19|150',
              type: 'Chapter',
              subType: 'pray',
            },
          ],
        },
        {
          id: '198',
          slices: [
            { id: '0', src: '19', type: 'Image' },
            { id: '1', chapters: '20|13-15', type: 'Chapter' },
            {
              id: '2',
              chapters: '19|2',
              type: 'Chapter',
              subType: 'pray',
            },
          ],
        },
        {
          id: '199',
          slices: [
            { id: '0', src: '19', type: 'Image' },
            { id: '1', chapters: '20|10-12', type: 'Chapter' },
            {
              id: '2',
              chapters: '19|1',
              type: 'Chapter',
              subType: 'pray',
            },
          ],
        },
        {
          id: '200',
          slices: [
            { id: '0', src: '19', type: 'Image' },
            { id: '1', chapters: '20|16-18', type: 'Chapter' },
            {
              id: '2',
              chapters: '19|3',
              type: 'Chapter',
              subType: 'pray',
            },
          ],
        },
        {
          id: '201',
          slices: [
            { id: '0', src: '19', type: 'Image' },
            { id: '1', chapters: '20|19-21', type: 'Chapter' },
            {
              id: '2',
              chapters: '19|4',
              type: 'Chapter',
              subType: 'pray',
            },
          ],
        },
        {
          id: '202',
          slices: [
            { id: '0', src: '19', type: 'Image' },
            { id: '1', chapters: '20|22-24', type: 'Chapter' },
            {
              id: '2',
              chapters: '19|5',
              type: 'Chapter',
              subType: 'pray',
            },
          ],
        },
        {
          id: '203',
          slices: [
            { id: '0', src: '19', type: 'Image' },
            { id: '1', chapters: '20|28-31', type: 'Chapter' },
            {
              id: '2',
              chapters: '19|7',
              type: 'Chapter',
              subType: 'pray',
            },
          ],
        },
        {
          id: '204',
          slices: [
            { id: '0', src: '19', type: 'Image' },
            { id: '1', chapters: '20|25-27', type: 'Chapter' },
            {
              id: '2',
              chapters: '19|6',
              type: 'Chapter',
              subType: 'pray',
            },
          ],
        },
        {
          id: '205',
          slices: [
            {
              id: '0',
              type: 'Video',
              title: 'Sagesse : Ecclésiaste',
              description:
                "Le livre de l'Ecclésiaste occupe une place unique dans la tradition de la littérature de sagesse en Israël. Regardez cette vidéo pour voir où il se situe.",
              url: 'https://www.youtube.com/watch?v=2eb3BHpw0X8',
            },
            { id: '1', src: '20', type: 'Image' },
            { id: '2', chapters: '21|9-12', type: 'Chapter' },
            {
              id: '3',
              chapters: '19|10',
              type: 'Chapter',
              subType: 'pray',
            },
          ],
        },
        {
          id: '206',
          slices: [
            { id: '0', src: '20', type: 'Image' },
            { id: '1', chapters: '21|5-8', type: 'Chapter' },
            {
              id: '2',
              chapters: '19|9',
              type: 'Chapter',
              subType: 'pray',
            },
          ],
        },
        {
          id: '207',
          slices: [
            { id: '0', src: '21', type: 'Image' },
            { id: '1', chapters: '22|5-8', type: 'Chapter' },
            {
              id: '2',
              chapters: '19|12',
              type: 'Chapter',
              subType: 'pray',
            },
          ],
        },
      ],
    },
    {
      id: '10',
      title: "Les prophètes de l'Exode",
      subTitle: 'Jérémie - Ézéchiel',
      image: 'cup',
      readingSlices: [
        {
          id: '4',
          slices: [
            {
              id: '0',
              type: 'Video',
              title: 'Vidéo : Ezéchiel 1-33',
              description:
                "Ezéchiel rencontre la glorieuse présence de Dieu dans le temple parmi les Israélites exilés à Babylone. Il est chargé d'annoncer le jugement de Dieu sur Israël et les nations pour l'échec de l'alliance et l'injustice.",
              url: 'https://www.youtube.com/watch?v=4Yr9DEYJ9IU',
            },
            { id: '1', src: '26', type: 'Image' },
            { id: '2', chapters: '26|1-4', type: 'Chapter' },
            {
              id: '3',
              chapters: '19|31',
              type: 'Chapter',
              subType: 'pray',
            },
          ],
        },
        {
          id: '5',
          slices: [
            {
              id: '0',
              type: 'Video',
              title: 'Vidéo : Ezéchiel 34-48',
              description:
                "Après la chute de Jérusalem à Babylone, Ezéchiel annonce un message d'espoir que Dieu sauvera Israël en faisant venir le roi messianique, en vainquant le mal parmi les nations et en apportant la restauration à toute la création depuis son temple cosmique.",
              url: 'https://www.youtube.com/watch?v=MyFcRxLzW6g',
            },
            { id: '1', src: '27', type: 'Image' },
            { id: '2', chapters: '26|31-33', type: 'Chapter' },
            {
              id: '3',
              chapters: '19|40',
              type: 'Chapter',
              subType: 'pray',
            },
          ],
        },
        {
          id: '50',
          slices: [
            {
              id: '0',
              type: 'Video',
              title: 'Vidéo : Jérémie',
              description:
                "Jérémie accuse Israël de rompre son alliance avec Dieu et l'avertit de l'exil à Babylone qui en résulte. Mais son espoir est que la miséricorde de Dieu guérisse un jour les cœurs rebelles d'Israël afin qu'ils puissent vraiment connaître et suivre leur Dieu.",
              url: 'https://www.youtube.com/watch?v=qTz_5zFBDsc',
            },
            { id: '1', src: '24', type: 'Image' },
            { id: '2', chapters: '24|1-3', type: 'Chapter' },
            {
              id: '3',
              chapters: '19|13',
              type: 'Chapter',
              subType: 'pray',
            },
          ],
        },
        {
          id: '51',
          slices: [
            { id: '0', src: '24', type: 'Image' },
            { id: '1', chapters: '24|30-32', type: 'Chapter' },
            {
              id: '2',
              chapters: '19|21',
              type: 'Chapter',
              subType: 'pray',
            },
          ],
        },
        {
          id: '52',
          slices: [
            {
              id: '0',
              type: 'Video',
              title: 'Vidéo : Lamentations',
              description:
                "Lamentations est un recueil de cinq poèmes qui explorent le chagrin et le traumatisme vécus par Israël lors de la chute de Jérusalem et de l'exil à Babylone. Ces expressions honnêtes de la douleur deviennent la base de l'espoir dans la miséricorde de Dieu, et nous enseignent que se lamenter sur le mal et la tragédie fait partie du cheminement de la foi.",
              url: 'https://www.youtube.com/watch?v=nY4dZgLRzSg',
            },
            { id: '1', src: '25', type: 'Image' },
            { id: '2', chapters: '25|1-2', type: 'Chapter' },
            {
              id: '3',
              chapters: '19|28',
              type: 'Chapter',
              subType: 'pray',
            },
          ],
        },
        {
          id: '53',
          slices: [
            { id: '0', src: '27', type: 'Image' },
            { id: '1', chapters: '26|34-36', type: 'Chapter' },
            {
              id: '2',
              chapters: '19|41',
              type: 'Chapter',
              subType: 'pray',
            },
          ],
        },
        {
          id: '54',
          slices: [
            { id: '0', src: '27', type: 'Image' },
            { id: '1', chapters: '26|45-48', type: 'Chapter' },
            {
              id: '2',
              chapters: '19|44',
              type: 'Chapter',
              subType: 'pray',
            },
          ],
        },
        {
          id: '208',
          slices: [
            { id: '0', src: '24', type: 'Image' },
            { id: '1', chapters: '24|4-6', type: 'Chapter' },
            {
              id: '2',
              chapters: '19|14',
              type: 'Chapter',
              subType: 'pray',
            },
          ],
        },
        {
          id: '209',
          slices: [
            { id: '0', src: '24', type: 'Image' },
            { id: '1', chapters: '24|7-9', type: 'Chapter' },
            {
              id: '2',
              chapters: '19|15',
              type: 'Chapter',
              subType: 'pray',
            },
          ],
        },
        {
          id: '210',
          slices: [
            { id: '0', src: '24', type: 'Image' },
            { id: '1', chapters: '24|10-13', type: 'Chapter' },
            {
              id: '2',
              chapters: '19|16',
              type: 'Chapter',
              subType: 'pray',
            },
          ],
        },
        {
          id: '211',
          slices: [
            { id: '0', src: '24', type: 'Image' },
            { id: '1', chapters: '24|14-17', type: 'Chapter' },
            {
              id: '2',
              chapters: '19|17',
              type: 'Chapter',
              subType: 'pray',
            },
          ],
        },
        {
          id: '212',
          slices: [
            { id: '0', src: '24', type: 'Image' },
            { id: '1', chapters: '24|18-22', type: 'Chapter' },
            {
              id: '2',
              chapters: '19|18',
              type: 'Chapter',
              subType: 'pray',
            },
          ],
        },
        {
          id: '213',
          slices: [
            { id: '0', src: '24', type: 'Image' },
            { id: '1', chapters: '24|23-25', type: 'Chapter' },
            {
              id: '2',
              chapters: '19|19',
              type: 'Chapter',
              subType: 'pray',
            },
          ],
        },
        {
          id: '214',
          slices: [
            { id: '0', src: '24', type: 'Image' },
            { id: '1', chapters: '24|26-29', type: 'Chapter' },
            {
              id: '2',
              chapters: '19|20',
              type: 'Chapter',
              subType: 'pray',
            },
          ],
        },
        {
          id: '215',
          slices: [
            { id: '0', src: '24', type: 'Image' },
            { id: '1', chapters: '24|33-36', type: 'Chapter' },
            {
              id: '2',
              chapters: '19|22',
              type: 'Chapter',
              subType: 'pray',
            },
          ],
        },
        {
          id: '216',
          slices: [
            { id: '0', src: '24', type: 'Image' },
            { id: '1', chapters: '24|37-39', type: 'Chapter' },
            {
              id: '2',
              chapters: '19|23',
              type: 'Chapter',
              subType: 'pray',
            },
          ],
        },
        {
          id: '217',
          slices: [
            { id: '0', src: '24', type: 'Image' },
            { id: '1', chapters: '24|40-44', type: 'Chapter' },
            {
              id: '2',
              chapters: '19|24',
              type: 'Chapter',
              subType: 'pray',
            },
          ],
        },
        {
          id: '218',
          slices: [
            { id: '0', src: '24', type: 'Image' },
            { id: '1', chapters: '24|45-48', type: 'Chapter' },
            {
              id: '2',
              chapters: '19|25',
              type: 'Chapter',
              subType: 'pray',
            },
          ],
        },
        {
          id: '219',
          slices: [
            { id: '0', src: '24', type: 'Image' },
            { id: '1', chapters: '24|49-50', type: 'Chapter' },
            {
              id: '2',
              chapters: '19|26',
              type: 'Chapter',
              subType: 'pray',
            },
          ],
        },
        {
          id: '220',
          slices: [
            { id: '0', src: '24', type: 'Image' },
            { id: '1', chapters: '24|51-52', type: 'Chapter' },
            {
              id: '2',
              chapters: '19|27',
              type: 'Chapter',
              subType: 'pray',
            },
          ],
        },
        {
          id: '221',
          slices: [
            { id: '0', src: '25', type: 'Image' },
            { id: '1', chapters: '25|3', type: 'Chapter' },
            {
              id: '2',
              chapters: '19|29',
              type: 'Chapter',
              subType: 'pray',
            },
          ],
        },
        {
          id: '222',
          slices: [
            { id: '0', src: '25', type: 'Image' },
            { id: '1', chapters: '25|4-5', type: 'Chapter' },
            {
              id: '2',
              chapters: '19|30',
              type: 'Chapter',
              subType: 'pray',
            },
          ],
        },
        {
          id: '223',
          slices: [
            { id: '0', src: '26', type: 'Image' },
            { id: '1', chapters: '26|5-8', type: 'Chapter' },
            {
              id: '2',
              chapters: '19|32',
              type: 'Chapter',
              subType: 'pray',
            },
          ],
        },
        {
          id: '224',
          slices: [
            { id: '0', src: '26', type: 'Image' },
            { id: '1', chapters: '26|9-12', type: 'Chapter' },
            {
              id: '2',
              chapters: '19|33',
              type: 'Chapter',
              subType: 'pray',
            },
          ],
        },
        {
          id: '225',
          slices: [
            { id: '0', src: '26', type: 'Image' },
            { id: '1', chapters: '26|13-15', type: 'Chapter' },
            {
              id: '2',
              chapters: '19|34',
              type: 'Chapter',
              subType: 'pray',
            },
          ],
        },
        {
          id: '226',
          slices: [
            { id: '0', src: '26', type: 'Image' },
            { id: '1', chapters: '26|16-18', type: 'Chapter' },
            {
              id: '2',
              chapters: '19|35',
              type: 'Chapter',
              subType: 'pray',
            },
          ],
        },
        {
          id: '227',
          slices: [
            { id: '0', src: '26', type: 'Image' },
            { id: '1', chapters: '26|19-21', type: 'Chapter' },
            {
              id: '2',
              chapters: '19|36',
              type: 'Chapter',
              subType: 'pray',
            },
          ],
        },
        {
          id: '228',
          slices: [
            { id: '0', src: '26', type: 'Image' },
            { id: '1', chapters: '26|22-24', type: 'Chapter' },
            {
              id: '2',
              chapters: '19|37',
              type: 'Chapter',
              subType: 'pray',
            },
          ],
        },
        {
          id: '229',
          slices: [
            { id: '0', src: '26', type: 'Image' },
            { id: '1', chapters: '26|25-27', type: 'Chapter' },
            {
              id: '2',
              chapters: '19|38',
              type: 'Chapter',
              subType: 'pray',
            },
          ],
        },
        {
          id: '230',
          slices: [
            { id: '0', src: '26', type: 'Image' },
            { id: '1', chapters: '26|28-30', type: 'Chapter' },
            {
              id: '2',
              chapters: '19|39',
              type: 'Chapter',
              subType: 'pray',
            },
          ],
        },
        {
          id: '231',
          slices: [
            { id: '0', src: '27', type: 'Image' },
            { id: '1', chapters: '26|37-39', type: 'Chapter' },
            {
              id: '2',
              chapters: '19|42',
              type: 'Chapter',
              subType: 'pray',
            },
          ],
        },
        {
          id: '232',
          slices: [
            { id: '0', src: '27', type: 'Image' },
            { id: '1', chapters: '26|40-44', type: 'Chapter' },
            {
              id: '2',
              chapters: '19|43',
              type: 'Chapter',
              subType: 'pray',
            },
          ],
        },
      ],
    },
    {
      id: '11',
      title: "Le retour d'Exode",
      subTitle: 'Esdras-Néhémie, Esther',
      image: 'wall',
      readingSlices: [
        {
          id: '6',
          slices: [
            {
              id: '0',
              type: 'Video',
              title: 'Vidéo : Esdras-Néhémie',
              description:
                "Le livre d'Esras-Néhémie raconte l'histoire du retour d'Israël à Jérusalem pour reconstruire leur vie et renouveler l'alliance. Malgré leurs meilleures tentatives, les dirigeants d'Israël sont incapables de réaliser les espoirs prophétiques, et l'histoire se termine donc en attendant que Dieu guérisse les cœurs de son peuple et envoie le royaume messianique.",
              url: 'https://www.youtube.com/watch?v=twgdre6_vdE',
            },
            { id: '1', src: '15', type: 'Image' },
            { id: '2', chapters: '15|1-3', type: 'Chapter' },
            {
              id: '3',
              chapters: '19|45',
              type: 'Chapter',
              subType: 'pray',
            },
          ],
        },
        {
          id: '7',
          slices: [
            {
              id: '0',
              type: 'Video',
              title: 'Vidéo : Esther',
              description:
                "Esther raconte l'histoire de la mystérieuse providence de Dieu à l'œuvre pour sauver son peuple du désastre. Elle se produit à travers les personnes les plus improbables et de manière surprenante, nous encourageant à chercher des signes de la direction de Dieu dans notre propre vie également.",
              url: 'https://www.youtube.com/watch?v=wB1_ziugZB8',
            },
            { id: '1', src: '16', type: 'Image' },
            { id: '2', chapters: '17|1-5', type: 'Chapter' },
            {
              id: '3',
              chapters: '19|53',
              type: 'Chapter',
              subType: 'pray',
            },
          ],
        },
        {
          id: '233',
          slices: [
            { id: '0', src: '15', type: 'Image' },
            { id: '1', chapters: '15|4-7', type: 'Chapter' },
            {
              id: '2',
              chapters: '19|46',
              type: 'Chapter',
              subType: 'pray',
            },
          ],
        },
        {
          id: '234',
          slices: [
            { id: '0', src: '15', type: 'Image' },
            { id: '1', chapters: '15|8-10', type: 'Chapter' },
            {
              id: '2',
              chapters: '19|47',
              type: 'Chapter',
              subType: 'pray',
            },
          ],
        },
        {
          id: '235',
          slices: [
            { id: '0', src: '15', type: 'Image' },
            { id: '1', chapters: '16|1-3', type: 'Chapter' },
            {
              id: '2',
              chapters: '19|48',
              type: 'Chapter',
              subType: 'pray',
            },
          ],
        },
        {
          id: '236',
          slices: [
            { id: '0', src: '15', type: 'Image' },
            { id: '1', chapters: '16|7-9', type: 'Chapter' },
            {
              id: '2',
              chapters: '19|50',
              type: 'Chapter',
              subType: 'pray',
            },
          ],
        },
        {
          id: '237',
          slices: [
            { id: '0', src: '15', type: 'Image' },
            { id: '1', chapters: '16|4-6', type: 'Chapter' },
            {
              id: '2',
              chapters: '19|49',
              type: 'Chapter',
              subType: 'pray',
            },
          ],
        },
        {
          id: '238',
          slices: [
            { id: '0', src: '15', type: 'Image' },
            { id: '1', chapters: '16|10-11', type: 'Chapter' },
            {
              id: '2',
              chapters: '19|51',
              type: 'Chapter',
              subType: 'pray',
            },
          ],
        },
        {
          id: '239',
          slices: [
            { id: '0', src: '15', type: 'Image' },
            { id: '1', chapters: '16|12-13', type: 'Chapter' },
            {
              id: '2',
              chapters: '19|52',
              type: 'Chapter',
              subType: 'pray',
            },
          ],
        },
        {
          id: '240',
          slices: [
            { id: '0', src: '16', type: 'Image' },
            { id: '1', chapters: '17|6-10', type: 'Chapter' },
            {
              id: '2',
              chapters: '19|54',
              type: 'Chapter',
              subType: 'pray',
            },
          ],
        },
      ],
    },
    {
      id: '12',
      title: "Les prophètes après l'Exode",
      subTitle: 'Daniel - Malachie',
      image: 'staff',
      readingSlices: [
        {
          id: '9',
          slices: [
            {
              id: '0',
              type: 'Video',
              title: 'Vidéo : Daniel',
              description:
                "L'histoire de Daniel et de ses amis à Babylone motive la fidélité au milieu de l'exil en terre étrangère. Les visions de Daniels offrent l'espoir que Dieu apportera un jour son royaume et vaincra le mal parmi toutes les nations.",
              url: 'https://www.youtube.com/watch?v=5RyZ2lceuPA',
            },
            { id: '1', src: '28', type: 'Image' },
            { id: '2', chapters: '27|1-3', type: 'Chapter' },
            {
              id: '3',
              chapters: '19|55',
              type: 'Chapter',
              subType: 'pray',
            },
          ],
        },
        {
          id: '10',
          slices: [
            {
              id: '0',
              type: 'Video',
              title: 'Vidéo : Aggée',
              description:
                "Aggée met Israël au défi, après l'exil, de rester fidèle à son Dieu et de reconstruire le temple. S'ils désobéissent, ils risquent de perdre leur rôle dans l'accomplissement des promesses de Dieu d'apporter le royaume messianique.",
              url: 'https://www.youtube.com/watch?v=DOoPKFpFZZE',
            },
            { id: '1', src: '38', type: 'Image' },
            { id: '2', chapters: '37|1-2', type: 'Chapter' },
            {
              id: '3',
              chapters: '19|59',
              type: 'Chapter',
              subType: 'pray',
            },
          ],
        },
        {
          id: '11',
          slices: [
            {
              id: '0',
              type: 'Video',
              title: 'Vidéo : Malachie',
              description:
                "Malachie expose l'égoïsme et les cœurs durs d'Israël après l'exil, et annonce que le jour prochain du Seigneur va purifier Israël et le préparer pour le futur royaume de Dieu.",
              url: 'https://www.youtube.com/watch?v=2ENSIn3OOyE',
            },
            { id: '1', src: '40', type: 'Image' },
            { id: '2', chapters: '39|1-2', type: 'Chapter' },
            {
              id: '3',
              chapters: '19|63',
              type: 'Chapter',
              subType: 'pray',
            },
          ],
        },
        {
          id: '111',
          slices: [
            { id: '0', src: '39', type: 'Image' },
            { id: '1', chapters: '38|5-8', type: 'Chapter' },
            {
              id: '2',
              chapters: '19|61',
              type: 'Chapter',
              subType: 'pray',
            },
          ],
        },
        {
          id: '241',
          slices: [
            { id: '0', src: '28', type: 'Image' },
            { id: '1', chapters: '27|4-6', type: 'Chapter' },
            {
              id: '2',
              chapters: '19|56',
              type: 'Chapter',
              subType: 'pray',
            },
          ],
        },
        {
          id: '242',
          slices: [
            { id: '0', src: '28', type: 'Image' },
            { id: '1', chapters: '27|7-9', type: 'Chapter' },
            {
              id: '2',
              chapters: '19|57',
              type: 'Chapter',
              subType: 'pray',
            },
          ],
        },
        {
          id: '243',
          slices: [
            { id: '0', src: '28', type: 'Image' },
            { id: '1', chapters: '27|10-12', type: 'Chapter' },
            {
              id: '2',
              chapters: '19|58',
              type: 'Chapter',
              subType: 'pray',
            },
          ],
        },
        {
          id: '244',
          slices: [
            {
              id: '0',
              type: 'Video',
              title: 'Vidéo : Zacharie',
              description:
                "Les visions de Zacharie nourrissent l'espoir dans la promesse future du royaume messianique, et mettent Israël au défi de rester fidèle à son Dieu après l'exil.",
              url: 'https://www.youtube.com/watch?v=vyQme1-Libg',
            },
            { id: '1', src: '39', type: 'Image' },
            { id: '2', chapters: '38|1-4', type: 'Chapter' },
            {
              id: '3',
              chapters: '19|60',
              type: 'Chapter',
              subType: 'pray',
            },
          ],
        },
        {
          id: '245',
          slices: [
            { id: '0', src: '39', type: 'Image' },
            { id: '1', chapters: '38|9-14', type: 'Chapter' },
            {
              id: '2',
              chapters: '19|62',
              type: 'Chapter',
              subType: 'pray',
            },
          ],
        },
        {
          id: '246',
          slices: [
            { id: '0', src: '40', type: 'Image' },
            { id: '1', chapters: '39|3-4', type: 'Chapter' },
            {
              id: '2',
              chapters: '19|64',
              type: 'Chapter',
              subType: 'pray',
            },
          ],
        },
      ],
    },
    {
      id: '13',
      title: "L'histoire jusqu'à présent ",
      subTitle: '1-2 Chroniques',
      image: 'scroll',
      readingSlices: [
        {
          id: '12',
          slices: [
            {
              id: '0',
              type: 'Video',
              title: 'Vidéo : 1-2 Chroniques',
              description:
                "Chroniques est un résumé majestueux de tout l'Ancien Testament. Il a été écrit pour montrer comment l'histoire d'Israël du passé indique l'espoir futur du royaume messianique.",
              url: 'https://www.youtube.com/watch?v=zlz7aB9Zmhc',
            },
            { id: '1', src: '41', type: 'Image' },
            { id: '2', chapters: '13|1-10', type: 'Chapter' },
            {
              id: '3',
              chapters: '19|65',
              type: 'Chapter',
              subType: 'pray',
            },
          ],
        },
        {
          id: '247',
          slices: [
            { id: '0', src: '41', type: 'Image' },
            { id: '1', chapters: '13|11-14', type: 'Chapter' },
            {
              id: '2',
              chapters: '19|66',
              type: 'Chapter',
              subType: 'pray',
            },
          ],
        },
        {
          id: '248',
          slices: [
            { id: '0', src: '41', type: 'Image' },
            { id: '1', chapters: '13|18-21', type: 'Chapter' },
            {
              id: '2',
              chapters: '19|68',
              type: 'Chapter',
              subType: 'pray',
            },
          ],
        },
        {
          id: '249',
          slices: [
            { id: '0', src: '41', type: 'Image' },
            { id: '1', chapters: '13|15-17', type: 'Chapter' },
            {
              id: '2',
              chapters: '19|67',
              type: 'Chapter',
              subType: 'pray',
            },
          ],
        },
        {
          id: '250',
          slices: [
            { id: '0', src: '41', type: 'Image' },
            { id: '1', chapters: '13|22-24', type: 'Chapter' },
            {
              id: '2',
              chapters: '19|69',
              type: 'Chapter',
              subType: 'pray',
            },
          ],
        },
        {
          id: '251',
          slices: [
            { id: '0', src: '41', type: 'Image' },
            { id: '1', chapters: '13|25-29', type: 'Chapter' },
            {
              id: '2',
              chapters: '19|70',
              type: 'Chapter',
              subType: 'pray',
            },
          ],
        },
        {
          id: '252',
          slices: [
            { id: '0', src: '41', type: 'Image' },
            { id: '1', chapters: '14|1-4', type: 'Chapter' },
            {
              id: '2',
              chapters: '19|71',
              type: 'Chapter',
              subType: 'pray',
            },
          ],
        },
        {
          id: '253',
          slices: [
            { id: '0', src: '41', type: 'Image' },
            { id: '1', chapters: '14|5-8', type: 'Chapter' },
            {
              id: '2',
              chapters: '19|72',
              type: 'Chapter',
              subType: 'pray',
            },
          ],
        },
        {
          id: '254',
          slices: [
            { id: '0', src: '41', type: 'Image' },
            { id: '1', chapters: '14|9-12', type: 'Chapter' },
            {
              id: '2',
              chapters: '19|73',
              type: 'Chapter',
              subType: 'pray',
            },
          ],
        },
        {
          id: '255',
          slices: [
            { id: '0', src: '41', type: 'Image' },
            { id: '1', chapters: '14|13-17', type: 'Chapter' },
            {
              id: '2',
              chapters: '19|74',
              type: 'Chapter',
              subType: 'pray',
            },
          ],
        },
        {
          id: '256',
          slices: [
            { id: '0', src: '41', type: 'Image' },
            { id: '1', chapters: '14|18-20', type: 'Chapter' },
            {
              id: '2',
              chapters: '19|75',
              type: 'Chapter',
              subType: 'pray',
            },
          ],
        },
        {
          id: '257',
          slices: [
            { id: '0', src: '41', type: 'Image' },
            { id: '1', chapters: '14|21-24', type: 'Chapter' },
            {
              id: '2',
              chapters: '19|76',
              type: 'Chapter',
              subType: 'pray',
            },
          ],
        },
        {
          id: '258',
          slices: [
            { id: '0', src: '41', type: 'Image' },
            { id: '1', chapters: '14|25-27', type: 'Chapter' },
            {
              id: '2',
              chapters: '19|77',
              type: 'Chapter',
              subType: 'pray',
            },
          ],
        },
        {
          id: '259',
          slices: [
            { id: '0', src: '41', type: 'Image' },
            { id: '1', chapters: '14|28-31', type: 'Chapter' },
            {
              id: '2',
              chapters: '19|78',
              type: 'Chapter',
              subType: 'pray',
            },
          ],
        },
        {
          id: '260',
          slices: [
            { id: '0', src: '41', type: 'Image' },
            { id: '1', chapters: '14|35-36', type: 'Chapter' },
            {
              id: '2',
              chapters: '19|80',
              type: 'Chapter',
              subType: 'pray',
            },
          ],
        },
        {
          id: '261',
          slices: [
            { id: '0', src: '41', type: 'Image' },
            { id: '1', chapters: '14|32-34', type: 'Chapter' },
            {
              id: '2',
              chapters: '19|79',
              type: 'Chapter',
              subType: 'pray',
            },
          ],
        },
      ],
    },
    {
      id: '14',
      title: 'Jésus et le Royaume',
      subTitle: 'Matthieu - Actes',
      image: 'cross',
      readingSlices: [
        {
          id: '1',
          slices: [
            { id: '0', src: '48', type: 'Image' },
            { id: '1', chapters: '42|14-16', type: 'Chapter' },
            {
              id: '2',
              verses: '19|119:1-32',
              type: 'Verse',
              subType: 'pray',
            },
          ],
        },
        {
          id: '13',
          slices: [
            {
              id: '0',
              type: 'Video',
              title: 'Vidéo : Matthieu 14-28',
              description:
                "Matthieu montre comment l'annonce par Jésus du royaume de Dieu génère l'hostilité des dirigeants d'Israël. Tout cela conduit à sa mort sacrificielle et à sa résurrection à Jérusalem, et l'histoire se termine avec Jésus ressuscité comme nouveau roi du monde.",
              url: 'https://www.youtube.com/watch?v=mq0vO1vNVfY',
            },
            { id: '1', src: '43', type: 'Image' },
            { id: '2', chapters: '40|13-14', type: 'Chapter' },
            {
              id: '3',
              chapters: '19|87',
              type: 'Chapter',
              subType: 'pray',
            },
          ],
        },
        {
          id: '14',
          slices: [
            {
              id: '0',
              type: 'Video',
              title: 'Vidéo : Jean 1-12',
              description:
                "Jean présente Jésus comme l'incarnation du Dieu créateur d'Israël, qui est venu comme l'accomplissement de toute l'histoire d'Israël. En Jésus, l'amour de Dieu et le don de la vie éternelle sont offerts au monde.",
              url: 'https://www.youtube.com/watch?v=QReuhS_R8Kk',
            },
            { id: '1', src: '45', type: 'Image' },
            { id: '2', chapters: '43|1-2', type: 'Chapter' },
            {
              id: '3',
              chapters: '19|103',
              type: 'Chapter',
              subType: 'pray',
            },
          ],
        },
        {
          id: '55',
          slices: [
            { id: '0', src: '42', type: 'Image' },
            { id: '1', chapters: '40|3-4', type: 'Chapter' },
            {
              id: '2',
              chapters: '19|82',
              type: 'Chapter',
              subType: 'pray',
            },
          ],
        },
        {
          id: '56',
          slices: [
            { id: '0', src: '42', type: 'Image' },
            { id: '1', chapters: '40|5-6', type: 'Chapter' },
            {
              id: '2',
              chapters: '19|83',
              type: 'Chapter',
              subType: 'pray',
            },
          ],
        },
        {
          id: '57',
          slices: [
            { id: '0', src: '44', type: 'Image' },
            { id: '1', chapters: '41|7-8', type: 'Chapter' },
            {
              id: '2',
              chapters: '19|98',
              type: 'Chapter',
              subType: 'pray',
            },
          ],
        },
        {
          id: '71',
          slices: [
            {
              id: '0',
              type: 'Video',
              title: 'Vidéo : Jean 13-21',
              description:
                "Jean présente les dernières paroles de Jésus à ses disciples avant sa mort et sa résurrection. Son départ permettra à l'Esprit de venir et donnera à ses disciples le pouvoir de poursuivre sa mission dans le monde.",
              url: 'https://www.youtube.com/watch?v=isJCKKCZx5A',
            },
            { id: '1', src: '46', type: 'Image' },
            { id: '2', chapters: '43|13-15', type: 'Chapter' },
            {
              id: '3',
              chapters: '19|109',
              type: 'Chapter',
              subType: 'pray',
            },
          ],
        },
        {
          id: '72',
          slices: [
            {
              id: '0',
              type: 'Video',
              title: 'Vidéo : Luc 1-9',
              description:
                "Luc présente Jésus comme le roi d'Israël promis et le fils de Dieu qui annonce une bonne nouvelle aux pauvres. Jésus est présenté comme un nouveau Moïse qui libèrera Israël par un nouvel Exode.",
              url: 'https://www.youtube.com/watch?v=Bo46uU2IF9w',
            },
            { id: '1', src: '47', type: 'Image' },
            { id: '2', chapters: '42|1', type: 'Chapter' },
            {
              id: '3',
              chapters: '19|112',
              type: 'Chapter',
              subType: 'pray',
            },
          ],
        },
        {
          id: '73',
          slices: [
            {
              id: '0',
              type: 'Video',
              title: 'Vidéo : Actes 1-12',
              description:
                "Luc poursuit l'histoire de Jésus en montrant que le Saint-Esprit est envoyé pour faire des disciples un nouveau temple. À travers eux, Jésus et l'Esprit poursuivront la mission du royaume de Dieu dans le monde.",
              url: 'https://www.youtube.com/watch?v=YLnUYCSWD9k',
            },
            { id: '1', src: '49', type: 'Image' },
            { id: '2', chapters: '44|1-2', type: 'Chapter' },
            {
              id: '3',
              verses: '19|119:153-176',
              type: 'Verse',
              subType: 'pray',
            },
          ],
        },
        {
          id: '112',
          slices: [
            { id: '0', src: '42', type: 'Image' },
            { id: '1', chapters: '40|7-8', type: 'Chapter' },
            {
              id: '2',
              chapters: '19|84',
              type: 'Chapter',
              subType: 'pray',
            },
          ],
        },
        {
          id: '113',
          slices: [
            { id: '0', src: '44', type: 'Image' },
            { id: '1', chapters: '41|5-6', type: 'Chapter' },
            {
              id: '2',
              chapters: '19|97',
              type: 'Chapter',
              subType: 'pray',
            },
          ],
        },
        {
          id: '114',
          slices: [
            { id: '0', src: '49', type: 'Image' },
            { id: '1', chapters: '44|15-16', type: 'Chapter' },
            {
              id: '2',
              chapters: '19|126',
              type: 'Chapter',
              subType: 'pray',
            },
          ],
        },
        {
          id: '262',
          slices: [
            {
              id: '0',
              type: 'Video',
              title: 'Vidéo : Matthieu 1-13',
              description:
                "Matthieu présente Jésus comme le Dieu d'Israël qui vient pour être avec son peuple. Il est un nouveau Moïse qui apporte le royaume de Dieu et une nouvelle Torah à Israël.",
              url: 'https://www.youtube.com/watch?v=wOJY7gRBkNU',
            },
            { id: '1', src: '42', type: 'Image' },
            { id: '2', chapters: '40|1-2', type: 'Chapter' },
            {
              id: '3',
              chapters: '19|81',
              type: 'Chapter',
              subType: 'pray',
            },
          ],
        },
        {
          id: '263',
          slices: [
            { id: '0', src: '42', type: 'Image' },
            { id: '1', chapters: '40|9-10', type: 'Chapter' },
            {
              id: '2',
              chapters: '19|85',
              type: 'Chapter',
              subType: 'pray',
            },
          ],
        },
        {
          id: '264',
          slices: [
            { id: '0', src: '42', type: 'Image' },
            { id: '1', chapters: '40|11-12', type: 'Chapter' },
            {
              id: '2',
              chapters: '19|86',
              type: 'Chapter',
              subType: 'pray',
            },
          ],
        },
        {
          id: '265',
          slices: [
            { id: '0', src: '43', type: 'Image' },
            { id: '1', chapters: '40|15-16', type: 'Chapter' },
            {
              id: '2',
              chapters: '19|88',
              type: 'Chapter',
              subType: 'pray',
            },
          ],
        },
        {
          id: '266',
          slices: [
            { id: '0', src: '43', type: 'Image' },
            { id: '1', chapters: '40|17-18', type: 'Chapter' },
            {
              id: '2',
              chapters: '19|89',
              type: 'Chapter',
              subType: 'pray',
            },
          ],
        },
        {
          id: '267',
          slices: [
            { id: '0', src: '43', type: 'Image' },
            { id: '1', chapters: '40|21-22', type: 'Chapter' },
            {
              id: '2',
              chapters: '19|91',
              type: 'Chapter',
              subType: 'pray',
            },
          ],
        },
        {
          id: '268',
          slices: [
            { id: '0', src: '43', type: 'Image' },
            { id: '1', chapters: '40|19-20', type: 'Chapter' },
            {
              id: '2',
              chapters: '19|90',
              type: 'Chapter',
              subType: 'pray',
            },
          ],
        },
        {
          id: '269',
          slices: [
            { id: '0', src: '43', type: 'Image' },
            { id: '1', chapters: '40|25-26', type: 'Chapter' },
            {
              id: '2',
              chapters: '19|93',
              type: 'Chapter',
              subType: 'pray',
            },
          ],
        },
        {
          id: '270',
          slices: [
            { id: '0', src: '43', type: 'Image' },
            { id: '1', chapters: '40|23-24', type: 'Chapter' },
            {
              id: '2',
              chapters: '19|92',
              type: 'Chapter',
              subType: 'pray',
            },
          ],
        },
        {
          id: '271',
          slices: [
            { id: '0', src: '43', type: 'Image' },
            { id: '1', chapters: '40|27-28', type: 'Chapter' },
            {
              id: '2',
              chapters: '19|94',
              type: 'Chapter',
              subType: 'pray',
            },
          ],
        },
        {
          id: '272',
          slices: [
            {
              id: '0',
              type: 'Video',
              title: 'Vidéo : Marc',
              description:
                "L'histoire de Marc souligne l'affirmation scandaleuse selon laquelle Jésus est le roi messianique d'Israël qui a établi son royaume par sa souffrance, sa mort et sa résurrection.",
              url: 'https://www.youtube.com/watch?v=9NhjIuy6_oo',
            },
            { id: '1', src: '44', type: 'Image' },
            { id: '2', chapters: '41|1-2', type: 'Chapter' },
            {
              id: '3',
              chapters: '19|95',
              type: 'Chapter',
              subType: 'pray',
            },
          ],
        },
        {
          id: '273',
          slices: [
            { id: '0', src: '44', type: 'Image' },
            { id: '1', chapters: '41|3-4', type: 'Chapter' },
            {
              id: '2',
              chapters: '19|96',
              type: 'Chapter',
              subType: 'pray',
            },
          ],
        },
        {
          id: '274',
          slices: [
            { id: '0', src: '44', type: 'Image' },
            { id: '1', chapters: '41|11-12', type: 'Chapter' },
            {
              id: '2',
              chapters: '19|100',
              type: 'Chapter',
              subType: 'pray',
            },
          ],
        },
        {
          id: '275',
          slices: [
            { id: '0', src: '44', type: 'Image' },
            { id: '1', chapters: '41|13-14', type: 'Chapter' },
            {
              id: '2',
              chapters: '19|101',
              type: 'Chapter',
              subType: 'pray',
            },
          ],
        },
        {
          id: '276',
          slices: [
            { id: '0', src: '44', type: 'Image' },
            { id: '1', chapters: '41|15-16', type: 'Chapter' },
            {
              id: '2',
              chapters: '19|102',
              type: 'Chapter',
              subType: 'pray',
            },
          ],
        },
        {
          id: '277',
          slices: [
            { id: '0', src: '45', type: 'Image' },
            { id: '1', chapters: '43|3-4', type: 'Chapter' },
            {
              id: '2',
              chapters: '19|104',
              type: 'Chapter',
              subType: 'pray',
            },
          ],
        },
        {
          id: '278',
          slices: [
            { id: '0', src: '45', type: 'Image' },
            { id: '1', chapters: '43|5-6', type: 'Chapter' },
            {
              id: '2',
              chapters: '19|105',
              type: 'Chapter',
              subType: 'pray',
            },
          ],
        },
        {
          id: '279',
          slices: [
            { id: '0', src: '45', type: 'Image' },
            { id: '1', chapters: '43|7-8', type: 'Chapter' },
            {
              id: '2',
              chapters: '19|106',
              type: 'Chapter',
              subType: 'pray',
            },
          ],
        },
        {
          id: '280',
          slices: [
            { id: '0', src: '45', type: 'Image' },
            { id: '1', chapters: '43|9-10', type: 'Chapter' },
            {
              id: '2',
              chapters: '19|107',
              type: 'Chapter',
              subType: 'pray',
            },
          ],
        },
        {
          id: '281',
          slices: [
            { id: '0', src: '45', type: 'Image' },
            { id: '1', chapters: '43|11-12', type: 'Chapter' },
            {
              id: '2',
              chapters: '19|108',
              type: 'Chapter',
              subType: 'pray',
            },
          ],
        },
        {
          id: '282',
          slices: [
            { id: '0', src: '46', type: 'Image' },
            { id: '1', chapters: '43|16-18', type: 'Chapter' },
            {
              id: '2',
              chapters: '19|110',
              type: 'Chapter',
              subType: 'pray',
            },
          ],
        },
        {
          id: '283',
          slices: [
            { id: '0', src: '46', type: 'Image' },
            { id: '1', chapters: '43|19-21', type: 'Chapter' },
            {
              id: '2',
              chapters: '19|111',
              type: 'Chapter',
              subType: 'pray',
            },
          ],
        },
        {
          id: '284',
          slices: [
            { id: '0', src: '47', type: 'Image' },
            { id: '1', chapters: '42|2-3', type: 'Chapter' },
            {
              id: '2',
              chapters: '19|113',
              type: 'Chapter',
              subType: 'pray',
            },
          ],
        },
        {
          id: '285',
          slices: [
            { id: '0', src: '47', type: 'Image' },
            { id: '1', chapters: '42|4-5', type: 'Chapter' },
            {
              id: '2',
              chapters: '19|114',
              type: 'Chapter',
              subType: 'pray',
            },
          ],
        },
        {
          id: '286',
          slices: [
            { id: '0', src: '47', type: 'Image' },
            { id: '1', chapters: '42|8-9', type: 'Chapter' },
            {
              id: '2',
              chapters: '19|116',
              type: 'Chapter',
              subType: 'pray',
            },
          ],
        },
        {
          id: '287',
          slices: [
            {
              id: '0',
              type: 'Video',
              title: 'Vidéo : Luc 10-24',
              description:
                "Luc retrace le voyage de Jésus à Jérusalem, qui devient une éducation à la vie de disciple pour ses disciples. La résistance d'Israël au message de Jésus culmine dans sa mort et sa résurrection, qui ouvre l'espoir pour toutes les nations.",
              url: 'https://www.youtube.com/watch?v=O-Za0jggT8Q',
            },
            { id: '1', src: '48', type: 'Image' },
            { id: '2', chapters: '42|10-11', type: 'Chapter' },
            {
              id: '3',
              chapters: '19|117',
              type: 'Chapter',
              subType: 'pray',
            },
          ],
        },
        {
          id: '288',
          slices: [
            { id: '0', src: '47', type: 'Image' },
            { id: '1', chapters: '42|6-7', type: 'Chapter' },
            {
              id: '2',
              chapters: '19|115',
              type: 'Chapter',
              subType: 'pray',
            },
          ],
        },
        {
          id: '289',
          slices: [
            { id: '0', src: '48', type: 'Image' },
            { id: '1', chapters: '42|12-13', type: 'Chapter' },
            {
              id: '2',
              chapters: '19|118',
              type: 'Chapter',
              subType: 'pray',
            },
          ],
        },
        {
          id: '290',
          slices: [
            { id: '0', src: '48', type: 'Image' },
            { id: '1', chapters: '42|17-18', type: 'Chapter' },
            {
              id: '2',
              verses: '19|119:33-64',
              type: 'Verse',
              subType: 'pray',
            },
          ],
        },
        {
          id: '291',
          slices: [
            { id: '0', src: '48', type: 'Image' },
            { id: '1', chapters: '42|21-22', type: 'Chapter' },
            {
              id: '2',
              verses: '19|119:97-128',
              type: 'Verse',
              subType: 'pray',
            },
          ],
        },
        {
          id: '292',
          slices: [
            { id: '0', src: '48', type: 'Image' },
            { id: '1', chapters: '42|19-20', type: 'Chapter' },
            {
              id: '2',
              verses: '19|119:65-96',
              type: 'Verse',
              subType: 'pray',
            },
          ],
        },
        {
          id: '293',
          slices: [
            { id: '0', src: '48', type: 'Image' },
            { id: '1', chapters: '42|23-24', type: 'Chapter' },
            {
              id: '2',
              verses: '19|119:129-152',
              type: 'Verse',
              subType: 'pray',
            },
          ],
        },
        {
          id: '294',
          slices: [
            { id: '0', src: '49', type: 'Image' },
            { id: '1', chapters: '44|3-4', type: 'Chapter' },
            {
              id: '2',
              chapters: '19|120',
              type: 'Chapter',
              subType: 'pray',
            },
          ],
        },
        {
          id: '295',
          slices: [
            { id: '0', src: '49', type: 'Image' },
            { id: '1', chapters: '44|11-12', type: 'Chapter' },
            {
              id: '2',
              chapters: '19|124',
              type: 'Chapter',
              subType: 'pray',
            },
          ],
        },
        {
          id: '296',
          slices: [
            { id: '0', src: '49', type: 'Image' },
            { id: '1', chapters: '44|5-6', type: 'Chapter' },
            {
              id: '2',
              chapters: '19|121',
              type: 'Chapter',
              subType: 'pray',
            },
          ],
        },
        {
          id: '297',
          slices: [
            { id: '0', src: '49', type: 'Image' },
            { id: '1', chapters: '44|9-10', type: 'Chapter' },
            {
              id: '2',
              chapters: '19|123',
              type: 'Chapter',
              subType: 'pray',
            },
          ],
        },
        {
          id: '298',
          slices: [
            { id: '0', src: '49', type: 'Image' },
            { id: '1', chapters: '44|7-8', type: 'Chapter' },
            {
              id: '2',
              chapters: '19|122',
              type: 'Chapter',
              subType: 'pray',
            },
          ],
        },
        {
          id: '299',
          slices: [
            {
              id: '0',
              type: 'Video',
              title: 'Vidéo : Actes 13-28',
              description:
                "Luc retrace comment le mouvement messianique animé par l'Esprit à Jérusalem devient un mouvement international multiethnique qui s'étend jusqu'à Rome.",
              url: 'https://www.youtube.com/watch?v=M7Xgd_7bfpA',
            },
            { id: '1', src: '49', type: 'Image' },
            { id: '2', chapters: '44|13-14', type: 'Chapter' },
            {
              id: '3',
              chapters: '19|125',
              type: 'Chapter',
              subType: 'pray',
            },
          ],
        },
        {
          id: '300',
          slices: [
            { id: '0', src: '49', type: 'Image' },
            { id: '1', chapters: '44|17-18', type: 'Chapter' },
            {
              id: '2',
              chapters: '19|127',
              type: 'Chapter',
              subType: 'pray',
            },
          ],
        },
        {
          id: '301',
          slices: [
            { id: '0', src: '49', type: 'Image' },
            { id: '1', chapters: '44|19-20', type: 'Chapter' },
            {
              id: '2',
              chapters: '19|128',
              type: 'Chapter',
              subType: 'pray',
            },
          ],
        },
        {
          id: '302',
          slices: [
            { id: '0', src: '49', type: 'Image' },
            { id: '1', chapters: '44|23-24', type: 'Chapter' },
            {
              id: '2',
              chapters: '19|130',
              type: 'Chapter',
              subType: 'pray',
            },
          ],
        },
        {
          id: '303',
          slices: [
            { id: '0', src: '49', type: 'Image' },
            { id: '1', chapters: '44|21-22', type: 'Chapter' },
            {
              id: '2',
              chapters: '19|129',
              type: 'Chapter',
              subType: 'pray',
            },
          ],
        },
        {
          id: '304',
          slices: [
            { id: '0', src: '49', type: 'Image' },
            { id: '1', chapters: '44|25-26', type: 'Chapter' },
            {
              id: '2',
              chapters: '19|131',
              type: 'Chapter',
              subType: 'pray',
            },
          ],
        },
        {
          id: '305',
          slices: [
            { id: '0', src: '49', type: 'Image' },
            { id: '1', chapters: '44|27-28', type: 'Chapter' },
            {
              id: '2',
              chapters: '19|132',
              type: 'Chapter',
              subType: 'pray',
            },
          ],
        },
        {
          id: '356',
          slices: [
            {
              id: '0',
              type: 'Video',
              title: "Vidéo : L'évangile de Marc",
              description:
                "Notre série de vidéos gospel vous donne un regard animé sur toute l'action. Voici un bon récapitulatif de Marc.",
              url: 'https://www.youtube.com/watch?v=CZEo5S5veYQ&t=3s',
            },
            { id: '1', src: '44', type: 'Image' },
            { id: '2', chapters: '41|9-10', type: 'Chapter' },
            {
              id: '3',
              chapters: '19|99',
              type: 'Chapter',
              subType: 'pray',
            },
          ],
        },
      ],
    },
    {
      id: '15',
      title: 'Le peuple du Royaume',
      subTitle: 'Romains - Jude',
      image: 'people',
      readingSlices: [
        {
          id: '2',
          slices: [
            {
              id: '0',
              type: 'Video',
              title: 'Vidéo : Romains 1-4',
              description:
                "Cette vidéo présente l'apôtre Paul et résume le contexte historique et les idées principales des quatre premiers chapitres de son œuvre la plus épique, La Lettre aux Romains.",
              url: 'https://www.youtube.com/watch?v=8EJmsrA0H4M',
            },
            { id: '1', src: '50', type: 'Image' },
            { id: '2', chapters: '45|1-2', type: 'Chapter' },
            {
              id: '3',
              chapters: '19|133',
              type: 'Chapter',
              subType: 'pray',
            },
          ],
        },
        {
          id: '58',
          slices: [
            { id: '0', src: '50', type: 'Image' },
            { id: '1', chapters: '45|3-4', type: 'Chapter' },
            {
              id: '2',
              chapters: '19|134',
              type: 'Chapter',
              subType: 'pray',
            },
          ],
        },
        {
          id: '59',
          slices: [
            {
              id: '0',
              type: 'Video',
              title: 'Vidéo : 1 Corinthiens',
              description:
                "Paul aborde une foule de problèmes dans l'ancienne église de Corinthe. Ce faisant, il nous montre ce que cela signifie de voir toutes les complexités de la vie à travers la lentille de l'Evangile sur Jésus.",
              url: 'https://www.youtube.com/watch?v=q99CrlpKBrw',
            },
            { id: '1', src: '52', type: 'Image' },
            { id: '2', chapters: '46|1-2', type: 'Chapter' },
            {
              id: '3',
              chapters: '19|141',
              type: 'Chapter',
              subType: 'pray',
            },
          ],
        },
        {
          id: '60',
          slices: [
            {
              id: '0',
              type: 'Video',
              title: 'Vidéo : Galates',
              description:
                "Paul confronte les chrétiens de Galilée qui pensent qu'ils pourraient compléter la grâce de Dieu en observant certains commandements de la Torah. Il leur rappelle que le salut est un don total de l'amour de Dieu, et n'a pas besoin d'être complété par des rituels religieux.",
              url: 'https://www.youtube.com/watch?v=3elnA_n3nWc',
            },
            { id: '1', src: '54', type: 'Image' },
            { id: '2', chapters: '48|1-2', type: 'Chapter' },
            {
              id: '3',
              chapters: '19|5',
              type: 'Chapter',
              subType: 'pray',
            },
          ],
        },
        {
          id: '61',
          slices: [
            {
              id: '0',
              type: 'Video',
              title: 'Vidéo : Ephésiens',
              description:
                "Paul offre un résumé panoramique de tout son message et de sa mission d'apôtre de Jésus pour le monde non-juif. Il montre également comment l'Évangile crée une communauté diversifiée qui est unifiée par la dévotion à Jésus et aux uns et aux autres.",
              url: 'https://www.youtube.com/watch?v=7pUE5wvhbBI',
            },
            { id: '1', src: '55', type: 'Image' },
            { id: '2', chapters: '49|1-2', type: 'Chapter' },
            {
              id: '3',
              chapters: '19|8',
              type: 'Chapter',
              subType: 'pray',
            },
          ],
        },
        {
          id: '62',
          slices: [
            {
              id: '0',
              type: 'Video',
              title: 'Vidéo : Colossiens',
              description:
                'Paul montre aux chrétiens colossiens comment Jésus est la clé pour comprendre toute la réalité. Sa mort et sa résurrection en tant que roi du monde exigent que chaque aspect de notre vie soit transformé par son amour et sa grâce.',
              url: 'https://www.youtube.com/watch?v=d9lcTLTNSF4',
            },
            { id: '1', src: '57', type: 'Image' },
            { id: '2', chapters: '51|1-2', type: 'Chapter' },
            {
              id: '3',
              chapters: '19|13',
              type: 'Chapter',
              subType: 'pray',
            },
          ],
        },
        {
          id: '63',
          slices: [
            {
              id: '0',
              type: 'Video',
              title: 'Vidéo : 1 Thessaloniciens',
              description:
                'Paul réconforte les chrétiens de Thessalonique au milieu des persécutions et de la peur. Il dirige leur espoir vers le futur retour de Jésus qui apportera la justice et arrangera toutes choses.',
              url: 'https://www.youtube.com/watch?v=lTz0CuviQPE',
            },
            { id: '1', src: '59a', type: 'Image' },
            { id: '2', chapters: '52|1-2', type: 'Chapter' },
            {
              id: '3',
              chapters: '19|15',
              type: 'Chapter',
              subType: 'pray',
            },
          ],
        },
        {
          id: '64',
          slices: [
            {
              id: '0',
              type: 'Video',
              title: 'Vidéo : 2 Thessaloniciens',
              description:
                "Paul apporte plus de réconfort aux chrétiens persécutés de Thessalonique. Il clarifie également son enseignement sur le futur retour de Jésus et met au défi les personnes dont le style de vie égoïste cause des problèmes dans l'église.",
              url: 'https://www.youtube.com/watch?v=CSLk-ULxAik',
            },
            { id: '1', src: '59b', type: 'Image' },
            { id: '2', chapters: '53|1-3', type: 'Chapter' },
            {
              id: '3',
              chapters: '19|18',
              type: 'Chapter',
              subType: 'pray',
            },
          ],
        },
        {
          id: '65',
          slices: [
            {
              id: '0',
              type: 'Video',
              title: 'Vidéo : 1 Timothée',
              description:
                "Paul guide Timothée dans la manière de rétablir l'ordre dans l'église d'Éphèse. Elle a été perturbée par des dirigeants corrompus qui égarent le peuple. Paul offre ici une vision globale du but et de la mission de l'église dans le monde.",
              url: 'https://www.youtube.com/watch?v=2diOsOpbZU4',
            },
            { id: '1', src: '60', type: 'Image' },
            { id: '2', chapters: '54|1-2', type: 'Chapter' },
            {
              id: '3',
              chapters: '19|19',
              type: 'Chapter',
              subType: 'pray',
            },
          ],
        },
        {
          id: '66',
          slices: [
            {
              id: '0',
              type: 'Video',
              title: 'Vidéo : 2 Timothée',
              description:
                'Paul écrit sa dernière lettre depuis la prison, demandant à Timothy de lui rendre visite avant son exécution. Paul propose un défi personnel à Timothée et nous montre que suivre Jésus exige sacrifice et risque.',
              url: 'https://www.youtube.com/watch?v=ybNEUUSEfoI',
            },
            { id: '1', src: '61', type: 'Image' },
            { id: '2', chapters: '55|1-4', type: 'Chapter' },
            {
              id: '3',
              chapters: '19|22',
              type: 'Chapter',
              subType: 'pray',
            },
          ],
        },
        {
          id: '67',
          slices: [
            {
              id: '0',
              type: 'Video',
              title: 'Vidéo : Hébreux',
              description:
                "L'hébreu est un enseignement puissant et pastoral qui montre comment Jésus est la représentation et l'expression parfaites du Dieu créateur. Nous sommes mis au défi de le suivre à tout prix.",
              url: 'https://www.youtube.com/watch?v=scvkhZ5DyhQ',
            },
            { id: '1', src: '63', type: 'Image' },
            { id: '2', chapters: '58|1-2', type: 'Chapter' },
            {
              id: '3',
              chapters: '19|25',
              type: 'Chapter',
              subType: 'pray',
            },
          ],
        },
        {
          id: '68',
          slices: [
            { id: '0', src: '67', type: 'Image' },
            { id: '1', chapters: '62|5', type: 'Chapter' },
            { id: '2', chapters: '63|1', type: 'Chapter' },
            { id: '3', chapters: '64|1', type: 'Chapter' },
            {
              id: '4',
              chapters: '19|38',
              type: 'Chapter',
              subType: 'pray',
            },
          ],
        },
        {
          id: '74',
          slices: [
            {
              id: '0',
              type: 'Video',
              title: 'Vidéo : 2 Corinthiens',
              description:
                'Paul répare sa relation avec les Corinthiens, en leur montrant comment le scandaleux message de Jésus crucifié ouvre un tout nouveau mode de vie.',
              url: 'https://www.youtube.com/watch?v=e0ivaY94HjA',
            },
            { id: '1', src: '53', type: 'Image' },
            { id: '2', chapters: '47|1-2', type: 'Chapter' },
            {
              id: '3',
              chapters: '19|149',
              type: 'Chapter',
              subType: 'pray',
            },
          ],
        },
        {
          id: '75',
          slices: [
            {
              id: '0',
              type: 'Video',
              title: 'Vidéo : Tite',
              description:
                "Paul charge Tite de mettre de l'ordre dans les églises des maisons de l'île de Crète. Il montre comment l'Évangile peut transformer la culture crétoise de l'intérieur, car les disciples de Jésus dépendent de l'Esprit pour donner à leur vie un tout nouveau sens.",
              url: 'https://www.youtube.com/watch?v=2aNe6TsB64w',
            },
            { id: '1', src: '62', type: 'Image' },
            { id: '2', chapters: '56|1-3', type: 'Chapter' },
            {
              id: '3',
              chapters: '19|23',
              type: 'Chapter',
              subType: 'pray',
            },
          ],
        },
        {
          id: '76',
          slices: [
            {
              id: '0',
              type: 'Video',
              title: 'Vidéo : Philémon',
              description:
                "Paul sert de médiateur entre Philémon et son ancien esclave Onésime, qui s'est échappé. Il montre comment l'Evangile a fait d'eux des frères dans le Messie, et exige que leur relation soit guérie et transformée.",
              url: 'https://www.youtube.com/watch?v=6FHGUa1Usfc',
            },
            { id: '1', src: '58', type: 'Image' },
            { id: '2', chapters: '57|1', type: 'Chapter' },
            {
              id: '3',
              chapters: '19|24',
              type: 'Chapter',
              subType: 'pray',
            },
          ],
        },
        {
          id: '77',
          slices: [
            {
              id: '0',
              type: 'Video',
              title: 'Vidéo : 2 Pierre',
              description:
                "Pierre affronte des enseignants corrompus qui ont déformé le message sur Jésus et qui ont égaré les autres. Il indique aux chrétiens l'espoir du retour de Jésus qui peut motiver la fidélité.",
              url: 'https://www.youtube.com/watch?v=w6JiduuSdnQ',
            },
            { id: '1', src: '66', type: 'Image' },
            { id: '2', chapters: '61|1-3', type: 'Chapter' },
            {
              id: '3',
              chapters: '19|35',
              type: 'Chapter',
              subType: 'pray',
            },
          ],
        },
        {
          id: '115',
          slices: [
            { id: '0', src: '51', type: 'Image' },
            { id: '1', chapters: '45|11-12', type: 'Chapter' },
            {
              id: '2',
              chapters: '19|138',
              type: 'Chapter',
              subType: 'pray',
            },
          ],
        },
        {
          id: '116',
          slices: [
            { id: '0', src: '56', type: 'Image' },
            { id: '1', chapters: '50|3-4', type: 'Chapter' },
            {
              id: '2',
              chapters: '19|12',
              type: 'Chapter',
              subType: 'pray',
            },
          ],
        },
        {
          id: '117',
          slices: [
            { id: '0', src: '64', type: 'Image' },
            { id: '1', chapters: '59|4-5', type: 'Chapter' },
            {
              id: '2',
              chapters: '19|32',
              type: 'Chapter',
              subType: 'pray',
            },
          ],
        },
        {
          id: '118',
          slices: [
            { id: '0', src: '65', type: 'Image' },
            { id: '1', chapters: '60|3-5', type: 'Chapter' },
            {
              id: '2',
              chapters: '19|34',
              type: 'Chapter',
              subType: 'pray',
            },
          ],
        },
        {
          id: '119',
          slices: [
            { id: '0', src: '67', type: 'Image' },
            { id: '1', chapters: '62|3-4', type: 'Chapter' },
            {
              id: '2',
              chapters: '19|37',
              type: 'Chapter',
              subType: 'pray',
            },
          ],
        },
        {
          id: '306',
          slices: [
            { id: '0', src: '51', type: 'Image' },
            { id: '1', chapters: '45|7-8', type: 'Chapter' },
            {
              id: '2',
              chapters: '19|136',
              type: 'Chapter',
              subType: 'pray',
            },
          ],
        },
        {
          id: '307',
          slices: [
            {
              id: '0',
              type: 'Video',
              title: 'Vidéo : Romains 5-16',
              description:
                "Cette vidéo explore les idées principales et le flux de pensée des chapitres 5 à 16 de La Lettre aux Romains, l'œuvre la plus épique de l'apôtre Paul.",
              url: 'https://www.youtube.com/watch?v=TYxbJrDgZRg',
            },
            { id: '1', src: '51', type: 'Image' },
            { id: '2', chapters: '45|5-6', type: 'Chapter' },
            {
              id: '3',
              chapters: '19|135',
              type: 'Chapter',
              subType: 'pray',
            },
          ],
        },
        {
          id: '308',
          slices: [
            { id: '0', src: '51', type: 'Image' },
            { id: '1', chapters: '45|9-10', type: 'Chapter' },
            {
              id: '2',
              chapters: '19|137',
              type: 'Chapter',
              subType: 'pray',
            },
          ],
        },
        {
          id: '309',
          slices: [
            { id: '0', src: '51', type: 'Image' },
            { id: '1', chapters: '45|13-14', type: 'Chapter' },
            {
              id: '2',
              chapters: '19|139',
              type: 'Chapter',
              subType: 'pray',
            },
          ],
        },
        {
          id: '310',
          slices: [
            { id: '0', src: '51', type: 'Image' },
            { id: '1', chapters: '45|15-16', type: 'Chapter' },
            {
              id: '2',
              chapters: '19|140',
              type: 'Chapter',
              subType: 'pray',
            },
          ],
        },
        {
          id: '311',
          slices: [
            { id: '0', src: '52', type: 'Image' },
            { id: '1', chapters: '46|3-4', type: 'Chapter' },
            {
              id: '2',
              chapters: '19|142',
              type: 'Chapter',
              subType: 'pray',
            },
          ],
        },
        {
          id: '312',
          slices: [
            { id: '0', src: '52', type: 'Image' },
            { id: '1', chapters: '46|5-6', type: 'Chapter' },
            {
              id: '2',
              chapters: '19|143',
              type: 'Chapter',
              subType: 'pray',
            },
          ],
        },
        {
          id: '313',
          slices: [
            { id: '0', src: '52', type: 'Image' },
            { id: '1', chapters: '46|7-8', type: 'Chapter' },
            {
              id: '2',
              chapters: '19|144',
              type: 'Chapter',
              subType: 'pray',
            },
          ],
        },
        {
          id: '314',
          slices: [
            { id: '0', src: '52', type: 'Image' },
            { id: '1', chapters: '46|9-10', type: 'Chapter' },
            {
              id: '2',
              chapters: '19|145',
              type: 'Chapter',
              subType: 'pray',
            },
          ],
        },
        {
          id: '315',
          slices: [
            { id: '0', src: '52', type: 'Image' },
            { id: '1', chapters: '46|11-12', type: 'Chapter' },
            {
              id: '2',
              chapters: '19|146',
              type: 'Chapter',
              subType: 'pray',
            },
          ],
        },
        {
          id: '316',
          slices: [
            { id: '0', src: '52', type: 'Image' },
            { id: '1', chapters: '46|13-14', type: 'Chapter' },
            {
              id: '2',
              chapters: '19|147',
              type: 'Chapter',
              subType: 'pray',
            },
          ],
        },
        {
          id: '317',
          slices: [
            { id: '0', src: '52', type: 'Image' },
            { id: '1', chapters: '46|15-16', type: 'Chapter' },
            {
              id: '2',
              chapters: '19|148',
              type: 'Chapter',
              subType: 'pray',
            },
          ],
        },
        {
          id: '318',
          slices: [
            { id: '0', src: '53', type: 'Image' },
            { id: '1', chapters: '47|3-4', type: 'Chapter' },
            {
              id: '2',
              chapters: '19|150',
              type: 'Chapter',
              subType: 'pray',
            },
          ],
        },
        {
          id: '319',
          slices: [
            { id: '0', src: '53', type: 'Image' },
            { id: '1', chapters: '47|5-6', type: 'Chapter' },
            {
              id: '2',
              chapters: '19|1',
              type: 'Chapter',
              subType: 'pray',
            },
          ],
        },
        {
          id: '320',
          slices: [
            { id: '0', src: '53', type: 'Image' },
            { id: '1', chapters: '47|7-8', type: 'Chapter' },
            {
              id: '2',
              chapters: '19|2',
              type: 'Chapter',
              subType: 'pray',
            },
          ],
        },
        {
          id: '321',
          slices: [
            { id: '0', src: '53', type: 'Image' },
            { id: '1', chapters: '47|9-10', type: 'Chapter' },
            {
              id: '2',
              chapters: '19|3',
              type: 'Chapter',
              subType: 'pray',
            },
          ],
        },
        {
          id: '322',
          slices: [
            { id: '0', src: '53', type: 'Image' },
            { id: '1', chapters: '47|11-13', type: 'Chapter' },
            {
              id: '2',
              chapters: '19|4',
              type: 'Chapter',
              subType: 'pray',
            },
          ],
        },
        {
          id: '323',
          slices: [
            { id: '0', src: '54', type: 'Image' },
            { id: '1', chapters: '48|3-4', type: 'Chapter' },
            {
              id: '2',
              chapters: '19|6',
              type: 'Chapter',
              subType: 'pray',
            },
          ],
        },
        {
          id: '324',
          slices: [
            { id: '0', src: '54', type: 'Image' },
            { id: '1', chapters: '48|5-6', type: 'Chapter' },
            {
              id: '2',
              chapters: '19|7',
              type: 'Chapter',
              subType: 'pray',
            },
          ],
        },
        {
          id: '325',
          slices: [
            { id: '0', src: '55', type: 'Image' },
            { id: '1', chapters: '49|5-6', type: 'Chapter' },
            {
              id: '2',
              chapters: '19|10',
              type: 'Chapter',
              subType: 'pray',
            },
          ],
        },
        {
          id: '326',
          slices: [
            { id: '0', src: '55', type: 'Image' },
            { id: '1', chapters: '49|3-4', type: 'Chapter' },
            {
              id: '2',
              chapters: '19|9',
              type: 'Chapter',
              subType: 'pray',
            },
          ],
        },
        {
          id: '327',
          slices: [
            {
              id: '0',
              type: 'Video',
              title: 'Vidéo : Phillipiens',
              description:
                "Paul remercie les chrétiens de Philadelphie pour leur soutien, et il montre comment l'amour du don de soi de Jésus est le modèle du mode de vie chrétien.",
              url: 'https://www.youtube.com/watch?v=ei_5jKbrUJM',
            },
            { id: '1', src: '56', type: 'Image' },
            { id: '2', chapters: '50|1-2', type: 'Chapter' },
            {
              id: '3',
              chapters: '19|11',
              type: 'Chapter',
              subType: 'pray',
            },
          ],
        },
        {
          id: '328',
          slices: [
            { id: '0', src: '57', type: 'Image' },
            { id: '1', chapters: '51|3-4', type: 'Chapter' },
            {
              id: '2',
              chapters: '19|14',
              type: 'Chapter',
              subType: 'pray',
            },
          ],
        },
        {
          id: '329',
          slices: [
            { id: '0', src: '59a', type: 'Image' },
            { id: '1', chapters: '52|3-4', type: 'Chapter' },
            {
              id: '2',
              chapters: '19|16',
              type: 'Chapter',
              subType: 'pray',
            },
          ],
        },
        {
          id: '330',
          slices: [
            { id: '0', src: '59a', type: 'Image' },
            { id: '1', chapters: '52|5', type: 'Chapter' },
            {
              id: '2',
              chapters: '19|17',
              type: 'Chapter',
              subType: 'pray',
            },
          ],
        },
        {
          id: '331',
          slices: [
            { id: '0', src: '60', type: 'Image' },
            { id: '1', chapters: '54|3-4', type: 'Chapter' },
            {
              id: '2',
              chapters: '19|20',
              type: 'Chapter',
              subType: 'pray',
            },
          ],
        },
        {
          id: '332',
          slices: [
            { id: '0', src: '60', type: 'Image' },
            { id: '1', chapters: '54|5-6', type: 'Chapter' },
            {
              id: '2',
              chapters: '19|21',
              type: 'Chapter',
              subType: 'pray',
            },
          ],
        },
        {
          id: '333',
          slices: [
            { id: '0', src: '63', type: 'Image' },
            { id: '1', chapters: '58|3-4', type: 'Chapter' },
            {
              id: '2',
              chapters: '19|26',
              type: 'Chapter',
              subType: 'pray',
            },
          ],
        },
        {
          id: '334',
          slices: [
            { id: '0', src: '63', type: 'Image' },
            { id: '1', chapters: '58|5-6', type: 'Chapter' },
            {
              id: '2',
              chapters: '19|27',
              type: 'Chapter',
              subType: 'pray',
            },
          ],
        },
        {
          id: '335',
          slices: [
            { id: '0', src: '63', type: 'Image' },
            { id: '1', chapters: '58|7-8', type: 'Chapter' },
            {
              id: '2',
              chapters: '19|28',
              type: 'Chapter',
              subType: 'pray',
            },
          ],
        },
        {
          id: '336',
          slices: [
            { id: '0', src: '63', type: 'Image' },
            { id: '1', chapters: '58|9-10', type: 'Chapter' },
            {
              id: '2',
              chapters: '19|29',
              type: 'Chapter',
              subType: 'pray',
            },
          ],
        },
        {
          id: '337',
          slices: [
            { id: '0', src: '63', type: 'Image' },
            { id: '1', chapters: '58|11-13', type: 'Chapter' },
            {
              id: '2',
              chapters: '19|30',
              type: 'Chapter',
              subType: 'pray',
            },
          ],
        },
        {
          id: '338',
          slices: [
            {
              id: '0',
              type: 'Video',
              title: 'Vidéo : Jacques',
              description:
                'Jacques combine la sagesse de son frère Jésus et le livre des Proverbes dans son propre appel stimulant à une vie de dévotion totale à Dieu.',
              url: 'https://www.youtube.com/watch?v=_hXVE65I2tw',
            },
            { id: '1', src: '64', type: 'Image' },
            { id: '2', chapters: '59|1-3', type: 'Chapter' },
            {
              id: '3',
              chapters: '19|31',
              type: 'Chapter',
              subType: 'pray',
            },
          ],
        },
        {
          id: '339',
          slices: [
            {
              id: '0',
              type: 'Video',
              title: 'Vidéo : 1 Pierre',
              description:
                "Pierre offre de l'espoir aux chrétiens qui souffrent de persécution et les guide par des instructions pratiques sur le mode de vie compatible avec le fait de suivre Jésus.",
              url: 'https://www.youtube.com/watch?v=Pd_6DiSLRAI',
            },
            { id: '1', src: '65', type: 'Image' },
            { id: '2', chapters: '60|1-2', type: 'Chapter' },
            {
              id: '3',
              chapters: '19|33',
              type: 'Chapter',
              subType: 'pray',
            },
          ],
        },
        {
          id: '340',
          slices: [
            {
              id: '0',
              type: 'Video',
              title: 'Vidéo : 1-3 Jean',
              description:
                "Jean appelle les disciples de Jésus à partager la vie et l'amour de Dieu en se consacrant à s'aimer les uns les autres.",
              url: 'https://www.youtube.com/watch?v=N-q8TaM8opA',
            },
            { id: '1', src: '67', type: 'Image' },
            { id: '2', chapters: '62|1-2', type: 'Chapter' },
            {
              id: '3',
              chapters: '19|36',
              type: 'Chapter',
              subType: 'pray',
            },
          ],
        },
        {
          id: '357',
          slices: [
            {
              id: '0',
              type: 'Video',
              title: 'Vidéo : Jude',
              description:
                'Jude affronte des enseignants corrompus qui déforment le message sur Jésus son frère et égarent les autres.',
              url: 'https://www.youtube.com/watch?v=whrJ5C45tgU',
            },
            { id: '1', src: '68', type: 'Image' },
            { id: '2', chapters: '65|1', type: 'Chapter' },
            {
              id: '3',
              chapters: '19|39',
              type: 'Chapter',
              subType: 'pray',
            },
          ],
        },
      ],
    },
    {
      id: '16',
      title: "L'Apocalypse",
      subTitle: 'Apocalypse',
      image: 'lamb',
      readingSlices: [
        {
          id: '69',
          slices: [
            {
              id: '0',
              type: 'Video',
              title: 'Vidéo : Apocalypse 1-11',
              description:
                'John addresses seven churches with a challenge to remain faithful to Jesus despite persecution and the temptation to apathy. His visions open up an alternate vision of human history, showing how Jesus is the true king of history.',
              url: 'https://www.youtube.com/watch?v=whrJ5C45tgU',
            },
            { id: '1', src: '69', type: 'Image' },
            { id: '2', chapters: '66|1-3', type: 'Chapter' },
            {
              id: '3',
              chapters: '19|40',
              type: 'Chapter',
              subType: 'pray',
            },
          ],
        },
        {
          id: '70',
          slices: [
            { id: '0', src: '70', type: 'Image' },
            { id: '1', chapters: '66|21-22', type: 'Chapter' },
            {
              id: '2',
              chapters: '19|48',
              type: 'Chapter',
              subType: 'pray',
            },
          ],
        },
        {
          id: '78',
          slices: [
            {
              id: '0',
              type: 'Video',
              title: 'Vidéo : Apocalypse 12-22',
              description:
                'Jean raconte ses visions sur le règne exalté de Jésus sur le monde et comment il apportera en temps voulu la justice finale sur le mal du monde et reviendra pour apporter le renouveau à toute la création.',
              url: 'https://www.youtube.com/watch?v=HIfJZA9fwbM',
            },
            { id: '1', src: '70', type: 'Image' },
            { id: '2', chapters: '66|12-13', type: 'Chapter' },
            {
              id: '3',
              chapters: '19|44',
              type: 'Chapter',
              subType: 'pray',
            },
          ],
        },
        {
          id: '341',
          slices: [
            { id: '0', src: '69', type: 'Image' },
            { id: '1', chapters: '66|4-6', type: 'Chapter' },
            {
              id: '2',
              chapters: '19|41',
              type: 'Chapter',
              subType: 'pray',
            },
          ],
        },
        {
          id: '342',
          slices: [
            { id: '0', src: '69', type: 'Image' },
            { id: '1', chapters: '66|7-9', type: 'Chapter' },
            {
              id: '2',
              chapters: '19|42',
              type: 'Chapter',
              subType: 'pray',
            },
          ],
        },
        {
          id: '343',
          slices: [
            { id: '0', src: '69', type: 'Image' },
            { id: '1', chapters: '66|10-11', type: 'Chapter' },
            {
              id: '2',
              chapters: '19|43',
              type: 'Chapter',
              subType: 'pray',
            },
          ],
        },
        {
          id: '344',
          slices: [
            { id: '0', src: '70', type: 'Image' },
            { id: '1', chapters: '66|14-16', type: 'Chapter' },
            {
              id: '2',
              chapters: '19|45',
              type: 'Chapter',
              subType: 'pray',
            },
          ],
        },
        {
          id: '345',
          slices: [
            { id: '0', src: '70', type: 'Image' },
            { id: '1', chapters: '66|17-18', type: 'Chapter' },
            {
              id: '2',
              chapters: '19|46',
              type: 'Chapter',
              subType: 'pray',
            },
          ],
        },
        {
          id: '346',
          slices: [
            {
              id: '0',
              type: 'Video',
              title: 'Vidéo : Le ciel et la terre',
              description:
                "Plus qu'une liste ennuyeuse de spécifications de construction, ces chapitres sur le Tabernacle nous indiquent l'important thème biblique de la restauration du ciel et de la terre par Dieu.",
              url: 'https://www.youtube.com/watch?v=PZ-CmV2Xg6A',
            },
            { id: '1', src: '70', type: 'Image' },
            { id: '2', chapters: '66|19-20', type: 'Chapter' },
            {
              id: '3',
              chapters: '19|47',
              type: 'Chapter',
              subType: 'pray',
            },
          ],
        },
      ],
    },
  ],
}
