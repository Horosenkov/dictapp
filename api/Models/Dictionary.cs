using System;
using System.Collections.Generic;

namespace api.Models
{
    public class Dictionary
    {
        public Guid DictionaryId {get;set;}
        public string Name {get;set;}

        public List<Word> Words {get;set;}
    }
}