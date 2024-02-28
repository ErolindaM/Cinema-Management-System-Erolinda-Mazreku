import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-all-movies',
  templateUrl: './all-movies.component.html',
  styleUrls: ['./all-movies.component.css']
})
export class AllMoviesComponent implements OnInit {
  movies = [
    {
      title: 'Ordinary Angels',
      description: 'A struggling hairdresser finds a renewed sense of purpose when she meets a widowed father working hard to care for his two daughters.',
      imageUrl: 'assets/images/ordinary-angels.jpg',
      category:'Drama'
    },
    {
      title: 'Oppenheimer',
      description: "Oppenheimer and a team of scientists spend years developing and designing the atomic bomb, forever changing the history.",
      imageUrl: 'assets/images/oppenheimer.jpg',
      category:'Thriller/Mystery'
    },
    {
      title: 'Madame Web',
      description: 'Forced to confront revelations about her past, Webb must protect three young women from a mysterious adversary who wants them dead.',
      imageUrl: 'assets/images/madame-web.jpg',
      category:'Action'
    },
    {
      title: 'Night Swim',
      description: "A dark secret from a family's home soon unleashes a malevolent force that drags that family into the depths of inescapable terror.",
      imageUrl: 'assets/images/night-swim.jpg',
      category:'Horror'
    },
    {
      title: 'The Wave',
      description: 'A Norwegian geologist (Kristoffer Joner) and his family fight for survival when a massive landslide causes a 250-foot tidal wave.',
      imageUrl: 'assets/images/the-wave.jpg',
      category:'Action'
    },
    {
      title: "Five Nights at Freddy's",
      description: "A security guard while spending his first night on the new job, realizes the late shift at Freddy's won't be so easy to make it through.",
      imageUrl: 'assets/images/five-nights.jpg',
      category:'Horror'
    },
    {
      title: 'The Beekeeper',
      description: "One man's brutal campaign takes on national stakes after it's revealed he's a former operative of an organization known as Beekeepers.",
      imageUrl: 'assets/images/the-beekeeper.jpg',
      category:'Action'
    },
    {
      title: 'Perfect days',
      description: 'Outside of his structured routine, Hirayama cherishes music on cassette tapes. He reflects on finding beauty in the world.',
      imageUrl: 'assets/images/perfect-days.jpg',
      category:'Drama'
    },

  ];
  constructor() { }

  ngOnInit(): void {
  }

}
