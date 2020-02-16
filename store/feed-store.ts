import { observable, action, computed } from 'mobx'
import { Link } from '../lib/news.graphql';

export class FeedStore {
    @observable
    links: Link[] = [];

    @observable
    offset: string = '';
  
    @action
    append(links: Link[]) {
      this.links = [...this.links, ...links]
    }

    @action
    updateOffset(offset: string) {
      this.offset = offset;
    }

    @action
    init(links: Link[], offset: string) {
      this.links = links;
      this.offset = offset;
    }
  }