using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;

namespace ABCDAir.Models
{
    public class Modelo
    {
        [Key]
        public string CODE { get; set; }
        public string ALTERNATIVE_CODE { get; set; }
        public decimal MAX_DEPARTURE_WEIGHT { get; set; }
        public decimal MAX_LANDING_WEIGHT { get; set; }
    }
}
