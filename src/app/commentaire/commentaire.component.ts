import { Component, OnInit } from '@angular/core';
import { Commentaire } from './modele/commentaire';
import { CommentaireService } from './service/commentaire.service';

@Component({
  selector: 'app-commentaire',
  templateUrl: './commentaire.component.html',
  styleUrls: ['./commentaire.component.scss']
})
export class CommentaireComponent implements OnInit {
  commentaires: Array<Commentaire> = new Array;
  constructor(private commentaireService: CommentaireService) { }

  ngOnInit(): void {
    this.commentaireService.getComment().subscribe((res: Array<Commentaire>) => {
      this.commentaires = res;
    });
  }

}
