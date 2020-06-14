import React from 'react'
import { List } from 'react-native-paper'
import * as Icon from '@expo/vector-icons'
import styled from '@emotion/native'

import Text from '~common/ui/Text'
import ScrollView from '~common/ui/ScrollView'
import Paragraph from '~common/ui/Paragraph'
import InlineLink from '~common/InlineLink'
import Container from '~common/ui/Container'
import Box from '~common/ui/Box'
import Header from '~common/Header'

const FAQScreen = () => {
  return (
    <Container>
      <Header hasBackButton title="FAQ" />
      <ScrollView>
        <Box padding={20}>
          <Text title fontSize={30} marginBottom={30}>
            Bienvenue,
          </Text>
          <Paragraph scaleLineHeight={-1} marginBottom={20}>
            J'ai regroupé ici la plupart des questions qui me sont régulièrement
            posées.
          </Paragraph>
          <List.Accordion
            titleNumberOfLines={5}
            title={
              <Text title fontSize={18}>
                L'application est lente
              </Text>
            }
          >
            <Paragraph marginLeft={20} scale={-1}>
              {
                "Si l'application est lente sur votre téléphone, j'en suis navré. Bible Strong utilise des bases de données lexique et dictionnaire qui contiennent des milliers d'entrées. Généralement les téléphones récents ont de bonnes performances sur l'application.\n\nPetit à petit je vais optimiser certaines parties de l'app comme le lexique et le dictionnaire."
              }
            </Paragraph>
          </List.Accordion>
          <List.Accordion
            titleNumberOfLines={5}
            title={
              <Text title fontSize={18}>
                L'application prend beaucoup de place
              </Text>
            }
          >
            <Paragraph marginLeft={20} scale={-1}>
              {
                "J'ai fait le choix de vous fournir le lexique, les bibles et le dictionnaire hors-ligne pour faciliter la rapidité d'accès.\n\nL'avantage est biensur l'accès rapide et hors-ligne de toutes vos informations, l'inconvénient est la taille de l'application.\n\n~20Mo pour l'index, ~25Mo pour le dictionnaire, ~30Mo pour le lexique Hébreu. Chaque bible pèse environ ~5Mo. \n\nEn tout l'application peut arriver jusqu'à 200Mo, donc assurez-vous d'avoir de la place."
              }
            </Paragraph>
          </List.Accordion>
          <List.Accordion
            titleNumberOfLines={5}
            title={
              <Text title fontSize={18}>
                J'ai constaté un bug
              </Text>
            }
          >
            <Paragraph marginLeft={20} scale={-1}>
              Dans ce cas, merci de m'envoyer un
              <InlineLink href="mailto:s.montlouis.calixte@gmail.com">
                {' '}
                mail{' '}
              </InlineLink>
              ou de
              <InlineLink href="https://bible-strong.canny.io/bugs">
                {' '}
                signaler un bug
              </InlineLink>
              . Je ferai de mon mieux pour le régler au plus vite.
            </Paragraph>
          </List.Accordion>
          <List.Accordion
            titleNumberOfLines={5}
            title={
              <Text title fontSize={18}>
                J'ai une idée de fonctionnalité
              </Text>
            }
          >
            <Paragraph marginLeft={20} scale={-1}>
              Vous souhaitez une nouvelle version de bible ? Vous avez une idée
              de fonctionnalité intéressante ? Dans ce cas, merci de m'envoyer
              un
              <InlineLink href="mailto:s.montlouis.calixte@gmail.com">
                {' '}
                mail{' '}
              </InlineLink>
              ou de
              <InlineLink href="https://bible-strong.canny.io/fonctionnalites">
                {' '}
                soumettre une fonctionnalité.
              </InlineLink>
            </Paragraph>
          </List.Accordion>
          <List.Accordion
            titleNumberOfLines={5}
            title={
              <Text title fontSize={18}>
                J'aimerai vous soutenir financièrement.
              </Text>
            }
          >
            <Paragraph marginLeft={20} scale={-1}>
              Merci ! Vous pouvez le faire par{' '}
              <InlineLink href="https://www.paypal.me/smontlouis">
                {' '}
                paypal{' '}
              </InlineLink>{' '}
              ou{' '}
              <InlineLink href="https://fr.tipeee.com/smontlouis">
                tipeee
              </InlineLink>
              . Si vous souhaitez le faire par un autre moyen. Merci de me
              contacter par
              <InlineLink href="mailto:s.montlouis.calixte@gmail.com">
                {' '}
                mail.
              </InlineLink>
            </Paragraph>
          </List.Accordion>
          <List.Accordion
            titleNumberOfLines={5}
            title={
              <Text title fontSize={18}>
                Je souhaite vous soutenir, mais qu'est-ce que Tipeee ?
              </Text>
            }
          >
            <Paragraph marginLeft={20} scale={-1}>
              <InlineLink href="https://fr.tipeee.com/smontlouis">
                Tipeee
              </InlineLink>{' '}
              est une plateforme participative pour les créateurs de contenus.
              Tipeee vous permet de soutenir en une fois ou mensuellement.
              Lorsque vous soutenez quelqu'un mensuellement, vous pouvez donner
              1€ par mois par exemple. Il suffit de cliquer sur "Tip", de se
              connecter et de choisir son moyen de paiement.
            </Paragraph>
          </List.Accordion>

          <List.Accordion
            titleNumberOfLines={5}
            title={
              <Text title fontSize={18}>
                Pourquoi l’application contient-elle du contenu adventiste ?
              </Text>
            }
          >
            <Paragraph marginLeft={20} scale={-1}>
              {`L’app contient du contenu adventiste, mais également du contenu d’autres confessions. Je ne me suis pas concentré sur la religion, mais plutôt sur la qualité du contenu. Par exemple, la timeline d’Amazing Facts est la seule que je connaisse qui soit aussi complète. Si vous ne partagez pas la foi adventiste, il est normal que vous puissiez être en désaccord avec certains contenus.`}
            </Paragraph>
          </List.Accordion>
          <List.Accordion
            titleNumberOfLines={5}
            title={
              <Text title fontSize={18}>
                Pourquoi je ne trouve pas les livres deutérocanoniques ?
              </Text>
            }
          >
            <Paragraph marginLeft={20} scale={-1}>
              Même si, de par ma foi, je considère ces livres comme apocryphes,
              j’ai hésité à les intégrer, car je souhaitais tout de même donner
              accès à l’entièreté des bibles. Cependant, étant donné la
              complexité actuelle de les implémenter (d'un point de vue
              technique), j’ai finalement choisi de ne pas suivre cette
              direction.
            </Paragraph>
          </List.Accordion>
          <List.Accordion
            titleNumberOfLines={5}
            title={
              <Text title fontSize={18}>
                Comment sont synchronisées mes données entre différents
                appareils ?
              </Text>
            }
          >
            <Paragraph marginLeft={20} scale={-1}>
              {`Bible Strong utilise la logique “dernier modifié, dernier sauvegardé”.

Si par exemple l’appareil A modifie ses données (sauvegardées ensuite sur le cloud) et que vous ouvrez l’appareil B,, l’appareil B récupérera toutes les données du cloud enregistrées par l’appareil A.

Cependant, si vous faites la même chose mais que l’appareil B est hors-ligne, lorsque vous modifierez vos données, il sera considéré comme le dernier modifié. De ce fait, une fois en ligne, il écrasera les données enregistrés sur le cloud par l’appareil A.

C’est la raison pour laquelle il est important de ne pas utiliser deux instances de l’application Bible Strong au même moment avec le même compte, vous risquez de perdre certaines données.
`}
            </Paragraph>
          </List.Accordion>
          <List.Accordion
            titleNumberOfLines={5}
            title={
              <Text title fontSize={18}>
                Qui êtes-vous ?
              </Text>
            }
          >
            <Paragraph marginLeft={20} scale={-1}>
              {
                "Très bonne question ! Je m'appelle Stéphane, j'ai 30 ans, je fais du design et du développement web et mobile depuis 10 ans.\n\nJe viens de Martinique, je suis adventiste du 7ème jour et je vis en ce moment en Nouvelle-Zélande avec mon épouse.\n\nJ'ai décidé de créer cette application parce que je n'en trouvais aucune qui répondait à mes besoins en terme de facilité d'utilisation et d'ergonomie pour étudier la Bible. Je souhaitais organiser mes versets, rédiger mes études, prendre mes notes, les voir directement intégrées dans ma bible, créer mes tags, etc.\n\nJe souhaite donc apporter une pierre à l'édifice en proposant une application gratuite, et financée par les dons et par une fonctionnalité premium. :)."
              }
            </Paragraph>
          </List.Accordion>
        </Box>
      </ScrollView>
    </Container>
  )
}
export default FAQScreen
