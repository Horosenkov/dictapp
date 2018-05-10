using System;
using api.Models;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.DependencyInjection;

namespace api
{
    public static class Extensions
    {
        public static IWebHost MockMigrate(this IWebHost webhost)
        {
            using (var scope = webhost.Services.GetService<IServiceScopeFactory>().CreateScope())
            {
                using (var dbContext = scope.ServiceProvider.GetRequiredService<ApiDbContext>()) 
                {
                    
                }
            }
            return webhost;
        }

        public static void MockMigrate(this ApiDbContext dbContext)
        {
            var dictionary1 = new Dictionary(){DictionaryId=Guid.NewGuid(), Name="English"};
            var word1 = new Word(){WordId = Guid.NewGuid(), Value="Hello", DictionaryId=dictionary1.DictionaryId};
            var translate1 = new Translate(){TranslateId=Guid.NewGuid(), Value="Привет", WordId=word1.WordId};

            dbContext.Dictionaries.Add(dictionary1);
            dbContext.Words.Add(word1);
            dbContext.Translates.Add(translate1);

            dbContext.SaveChanges();
        }
    }

}