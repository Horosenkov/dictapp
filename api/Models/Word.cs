using System;
using System.Collections.Generic;

namespace api.Models
{
    public class Word
    {
        public Guid WordId {get;set;}
        public string Value {get;set;}
        
        public List<Translate> Translates {get;set;}
        public Guid DictionaryId {get;set;}
        public Dictionary Dictionary {get;set;}
    }
}