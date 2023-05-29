import React from 'react';
import { Message } from '../../components';
import { DialogItem, Dialogs } from '../../components';

import './Home.scss';

const Home = () => {

  const users = [
    {
      fullName: 'Федор Достоевский',
      isOnline: false
    },
    {
      fullName: 'Федор Достоевский',
      isOnline: true
    },
    {
      fullName: 'Федор Достоевский',
      isOnline: false
    }
  ];

  return (
    <section className='home'>
      <Dialogs items={[
        {
          _id: Math.random(),
          text: 'Мы все свидетельствуем Вам глубочайшее наше почтение и целуем Ваши ручки, дражайший папенька: Михайла, Федор, Варвара и Андрюша',
          created_at: '2023-02-04T11:30:30',
          user: {
            _id: 1,
            fullName: 'Федор Достоевский',
            avatar: 'https://historyrussia.org/images/25032021_Dostoevskiy/25032021_2.jpg'
          }
        },
        {
          _id: Math.random(),
          text: 'Привет! как твои дела?',
          created_at: '2023-03-04T11:30:30',
          user: {
            _id: 1,
            fullName: 'Алан Тьюринг',
            avatar: 'https://3dnews.ru/assets/external/illustrations/2013/12/24/790148/Turing1.jpg'
          }
        }
      ]} />
      {/* <Dialogs items={[
        {
          user: {
            fullName: 'Федор Достоевский',
            avatar: null
          },
          message: {
            text: 'Мы все свидетельствуем Вам глубочайшее наше почтение и целуем Ваши ручки, дражайший папенька: Михайла, Федор, Варвара и Андрюша',
            isReaded: false,
            created_at: new Date()
          }
        }
      ]} /> */}
      {/* <Message
        avatar='https://sun9-74.userapi.com/impf/c622319/v622319086/18b2a/nt-JGABYxXA.jpg?size=604x511&quality=96&sign=abaeb6368fbfdf744c0051e2e01a7cb6&type=album'
        text='Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...'
        date='2023-03-04T11:30:30'
        attachments={[
          {
            fileName: 'image.jpg',
            url: 'https://media.istockphoto.com/photos/urban-crowd-from-above-picture-id495692241?b=1&k=20&m=495692241&s=170667a&w=0&h=ITK52CyhJI2hWB9aZLWwiTdrFcAh_7kN9Joyr6ukkw4='
          },
          {
            fileName: 'image.jpg',
            url: 'https://media.istockphoto.com/photos/the-concept-of-time-picture-id1390891702?b=1&k=20&m=1390891702&s=170667a&w=0&h=uZl-Jf5vj55jftas3yPp8ZrLawmhTP6jIw4uoxG8WvE='
          },
          {
            fileName: 'image.jpg',
            url: 'https://media.istockphoto.com/photos/insurance-and-risk-management-concept-picture-id1400865154?b=1&k=20&m=1400865154&s=170667a&w=0&h=K9EBBaVqh5OgfzZmT91J7hDputLa7kcMZwmOQ6kvFxQ='
          }
        ]}
      /> */}
      {/* <Message
        avatar='https://www.meme-arsenal.com/memes/d288372fa00b9803b549942f7c2a096d.jpg'
        text='At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.'
        date='2023-03-04T11:30:30'
        isMe={true}
        isReaded={false}
      />
      <Message
        avatar='https://sun9-74.userapi.com/impf/c622319/v622319086/18b2a/nt-JGABYxXA.jpg?size=604x511&quality=96&sign=abaeb6368fbfdf744c0051e2e01a7cb6&type=album'
        attachments={[
          {
            fileName: 'image.jpg',
            url: 'https://media.istockphoto.com/photos/urban-crowd-from-above-picture-id495692241?b=1&k=20&m=495692241&s=170667a&w=0&h=ITK52CyhJI2hWB9aZLWwiTdrFcAh_7kN9Joyr6ukkw4='
          }
        ]}
      /> */}
      {/* <Message
        avatar='https://sun9-74.userapi.com/impf/c622319/v622319086/18b2a/nt-JGABYxXA.jpg?size=604x511&quality=96&sign=abaeb6368fbfdf744c0051e2e01a7cb6&type=album'
        isTyping
      /> */}
      <Message
        avatar='https://sun9-74.userapi.com/impf/c622319/v622319086/18b2a/nt-JGABYxXA.jpg?size=604x511&quality=96&sign=abaeb6368fbfdf744c0051e2e01a7cb6&type=album'
        // isTyping
        // text='Hello'
        audio="https://assets.mixkit.co/active_storage/sfx/2342/2342-preview.mp3"
        date='2023-04-04T11:30:30'
      />
      <Message
        avatar='https://sun9-74.userapi.com/impf/c622319/v622319086/18b2a/nt-JGABYxXA.jpg?size=604x511&quality=96&sign=abaeb6368fbfdf744c0051e2e01a7cb6&type=album'
        // isTyping
        // text='Hello'
        audio="https://assets.mixkit.co/active_storage/sfx/2357/2357-preview.mp3"
        date='2023-04-04T11:30:30'
      />
    </section>
  );
};

export default Home;