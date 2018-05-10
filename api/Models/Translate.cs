using System;

namespace api.Models
{
    public class Translate
    {
        public Guid TranslateId {get;set;}

        public string Value {get;set;}

        public Guid WordId {get;set;}
        public Word Word{get;set;}


    }

}